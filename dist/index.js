"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
//import swaggerDocument  from './swagger.json';
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swaggerinfo_1 = require("./swagger/swaggerinfo");
const routes_1 = __importDefault(require("./routes"));
var dd_options = {
    'response_code': true,
    'tags': ['app:my_app']
};
const morgan = require('morgan');
var connect_datadog = require('connect-datadog')(dd_options);
const { createLogger, format, transports } = require('winston');
const options = {
    failOnErrors: true,
    definition: {
        openapi: '3.0.0',
        info: swaggerinfo_1.info
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
logger.info('Hello log with metas', { color: 'blue' });
app.use(morgan('tiny'));
app.use(connect_datadog);
const openapiSpecification = (0, swagger_jsdoc_1.default)(options);
app.use('/swagger', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(openapiSpecification));
app.use('/', routes_1.default);
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(7000, function () {
    console.log('Example app listening on port 7000!');
});
//# sourceMappingURL=index.js.map