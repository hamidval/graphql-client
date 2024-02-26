import { Request, Response, NextFunction } from 'express';
import request, { gql } from 'graphql-request';
import StudentTransform from '../transforms/student';
import { Student, Students } from '../generated/types';
import { GET_STUDENT_LESSONS_QUERY } from '../queries/getStudentLessons';
import { checkNumber } from '../validation/validationUtils';

/**
 * @openapi
 * /Students:
 *   get:
 *     description: This returns a list of fixtures for a competition and date or match day, sorted by kick off time or by home team name, optionally truncated and with hidden matches filtered out.
 *     summary: Find Fixtures for a competition Id and match Day and sort
 *     tags:
 *       - Students
 *     parameters:
 *       - in: query
 *         name: studentId
 *         description: Get all students
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
async function getStudentsById(req: Request, res: Response) {

    const document = gql`
    query Query($studentInput: StudentInput) {
        students(studentInput: $studentInput) {
          Id
          FirstName
        }
      }
  `

  var url = 'http://localhost:4000/graphql'
  var {studentId} = req.query;
  var variables = {studentInput:{filter:{id:studentId}}}
  var data = await request(
    {
        url:url, 
        document:document,
        variables: variables
    }) as Students

  res.status(200).json(new StudentTransform().students(data));
    
}


/**
 * @openapi
 * /Students/Lessons:
 *   get:
 *     description: This returns a list of fixtures for a competition and date or match day, sorted by kick off time or by home team name, optionally truncated and with hidden matches filtered out.
 *     summary: Find Fixtures for a competition Id and match Day and sort
 *     tags:
 *       - Students
 *     parameters:
 *       - in: query
 *         name: studentId
 *         description: Get all lessons for a student
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
async function getStudentLessons(req: Request, res: Response) {

var url = 'http://localhost:4000/graphql'
var {studentId} = req.query;
var variables = {studentInput:{filter:{id:checkNumber(studentId), inlcudeLessons: true}}}
var data = await request(
  {
      url: url, 
      document: GET_STUDENT_LESSONS_QUERY,
      variables: variables
  }) as Students

  console.log(data)
res.status(200).json(new StudentTransform().students(data));
  
}



export default {
    getStudentsById,
    getStudentLessons
     };
     
     