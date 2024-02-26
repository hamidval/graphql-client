import express from 'express';
var app = express();
import  swaggerUi  from 'swagger-ui-express';
//import swaggerDocument  from './swagger.json';
import swaggerJsdoc from 'swagger-jsdoc';
import { info } from './swagger/swaggerinfo';
import routes from './routes';

var dd_options = {
  'response_code':true,
  'tags': ['app:my_app']
}

const morgan = require('morgan');

var connect_datadog = require('connect-datadog')(dd_options);
const { createLogger, format, transports } = require('winston');

const options = {
  failOnErrors: true,
  definition: {
    openapi: '3.0.0',
    info: info
  },
  apis: ['src/controllers/*.ts', 'build/main/controllers/*.ts'] // Dev and prod build
};


const httpTransportOptions = {
  host: 'http-intake.logs.datadoghq.com',
  path: '/api/v2/logs?dd-api-key=2734fad8526fb82fd64cebf96796b3a4&ddsource=nodejs',
  ssl: true
};


const logger = createLogger({
  level: 'info',
  exitOnError: false,
  format: format.json(),
  transports: [
    new transports.Http(httpTransportOptions),
  ],
});


// Example logs
logger.log('info', 'Hello simple log!');
logger.info('Hello log with metas',{color: 'blue' });


app.use(morgan('tiny'))

app.use(connect_datadog);
const openapiSpecification = swaggerJsdoc(options);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(openapiSpecification));

app.use('/', routes);
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(7000, function () {
  console.log('Example app listening on port 7000!');
});