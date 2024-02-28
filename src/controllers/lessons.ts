import request, { gql } from "graphql-request";
import { Request, Response } from "express";
import { GET_ALL_LESSONS_QUERY } from "../queries/getAllLessonQuery";
import { Lessons } from "../generated/types";
import LessonTransform from "../transforms/lessons";
import { checkNumber } from "../validation/validationUtils";
import { validationResult } from 'express-validator';
import { sendValidationResponse } from '../validation/validationUtils';
/**
 * @openapi
 * /Lessons:
 *   get:
 *     description: This returns a list of fixtures for a competition and date or match day, sorted by kick off time or by home team name, optionally truncated and with hidden matches filtered out.
 *     summary: Find Fixtures for a competition Id and match Day and sort
 *     tags:
 *       - Lessons
 *     parameters:
 *       - in: query
 *         name: id
 *         description: Fixture daily id to filter by
 *         required: false
 *         schema:
 *           type: integer
 *           format: int64
 *       - in: query
 *         name: day
 *         description: Array of ids of stats to return
 *         required: false
 *         schema:
 *           type: integer
 *           format: int64
 *       - in: query
 *         name: studentId
 *         description: App name otherwise the configured default in SSN Football App (SSN-UK) is used
 *         required: false
 *         schema:
 *           type: integer
 *           format: int64
 *       - in: query
 *         name: notDay
 *         description: to get the lessons not on this day
 *         required: false
 *         schema:
 *           type: integer
 *           format: int64
 *       - in: query
 *         name: locale
 *         description: Language to return
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

async function getLessons(req: Request, res: Response)
{
    const result = validationResult(req);
    if (!result.isEmpty()) {
      sendValidationResponse(res, result);
      return;
    }

    var {id, day, studentId, notDay} = req.query;
    console.log(notDay)
    var variables = {lessonInput:{filter:{
      id: checkNumber(id), 
      day:checkNumber(day), 
      studentId:checkNumber(studentId),
      notDay: checkNumber(notDay)
    },
      
    }}
    var url = 'http://localhost:4000/graphql'
    var data = await request(
        {
            url:url, 
            document:GET_ALL_LESSONS_QUERY,
            variables: variables
        }) as Lessons

      res.status(200).json(new LessonTransform().lessons(data));       
}



export default 
{
    getLessons
}