import { Request, Response, NextFunction } from 'express';
import request, { gql } from 'graphql-request';
import { GET_ALL_TAKEN_LESSONS_QUERY } from '../queries/getTakenLessons';
import { checkNumber } from '../validation/validationUtils';
import { TakenLessons } from '../generated/types';
import TakenLessonTransforms from '../transforms/takenLessons';

/**
 * @openapi
 * /TakenLessons:
 *   get:
 *     description: This returns a list of fixtures for a competition and date or match day, sorted by kick off time or by home team name, optionally truncated and with hidden matches filtered out.
 *     summary: Find Fixtures for a competition Id and match Day and sort
 *     tags:
 *       - TakenLessons
 *     parameters:
 *       - in: query
 *         name: id
 *         description: Get all lessons taken
 *         required: false
 *         schema:
 *           type: string
 *           format: string
 *       - in: query
 *         name: teacherId
 *         description: Get all lessons taken
 *         required: false
 *         schema:
 *           type: string
 *           format: string
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
async function getTakenLessons(req: Request, res: Response) {
  var url = 'http://localhost:4000/graphql'
  var {id, teacherId} = req.query;

  var variables = {takenLessonInput:{filter:{id:checkNumber(id), teacherId: checkNumber(teacherId)}}}
  var data = await request(
    {
        url:url, 
        document:GET_ALL_TAKEN_LESSONS_QUERY,
        variables: variables
    }) as TakenLessons

  res.status(200).json(new TakenLessonTransforms().takenLessons(data));
    
}


export default {
    getTakenLessons
     };
     
     