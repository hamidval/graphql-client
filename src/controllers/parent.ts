import { Request, Response, NextFunction } from 'express';
import { request, gql } from 'graphql-request'
import ParentTransforms from '../transforms/parents';
import { Parent } from '../types/parent';
import { Parents } from '../generated/types';


/**
 * @openapi
 * /Parents:
 *   get:
 *     description: This returns a list of fixtures for a competition and date or match day, sorted by kick off time or by home team name, optionally truncated and with hidden matches filtered out.
 *     summary: Find Fixtures for a competition Id and match Day and sort
 *     tags:
 *       - Parents
 *     parameters:
 *       - in: query
 *         name: parentId
 *         description: Get all parents
 *         required: false
 *         schema:
 *           type: number
 *           format: number
 *     responses:
 *       200:
 *         description: Successful operation.
 *       400:
 *         description: Invalid Input.
 *       500:
 *         description: Internal server error.
 *       404:
 *         description: Not found.
 */
async function Parents(req: Request, res: Response) {
    const document = gql`
    query {
        parents {
            Id
            FirstName
            LastName  
        }
      }
  `

  var url = 'http://localhost:4000/graphql'
  var variables = {studentInput:{filter:{id:null}}}
  var data = await request(url, document) as Parents      
  res.status(200).json(new ParentTransforms().parents(data));
  
  }


  export default {
    Parents
  };
  
  