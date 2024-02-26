import { Request, Response, NextFunction } from 'express';
import request, { gql } from 'graphql-request';
import {  TakenLessons, TeacherData } from '../generated/types';
import { GET_TEACHER_QUERY } from '../queries/Teacher/getTeachersQuery';
import { checkNumber } from '../validation/validationUtils';
import TeacherTransform from '../transforms/teachers';
import { GET_TEACHER_PAY_QUERY } from '../queries/Teacher/getTeacherPayQuery';
import TakenLessonTransforms from '../transforms/takenLessons';

/**
 * @openapi
 * /Teachers:
 *   get:
 *     description: This returns a list of teachers.
 *     summary: Find Teachers
 *     tags:
 *       - Teachers
 *     parameters:
 *       - in: query
 *         name: id
 *         description: Get teacher
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
async function getAllTeachers(req: Request, res: Response) {
  var url = 'http://localhost:4000/graphql'
  var {id} = req.query;
  console.log(id)
  var variables = {teacherInput:{filter:{id:checkNumber(id)}}}
  var data = await request(
    {
        url:url, 
        document:GET_TEACHER_QUERY,
        variables: variables
    }) as TeacherData

  res.status(200).json(new TeacherTransform().teachers(data));
    
}

/**
 * @openapi
 * /Teachers/Earnings:
 *   get:
 *     description: This returns a list of teachers.
 *     summary: Find Teachers
 *     tags:
 *       - Teachers
 *     parameters:
 *       - in: query
 *         name: teacherId
 *         description: Get teacher
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
async function getTeacherPay(req: Request, res: Response) {
  var url = 'http://localhost:4000/graphql'
  var {teacherId} = req.query;
  var variables = {takenLessonInput:{filter:{teacherId:checkNumber(teacherId)}}}
  var data = await request(
    {
        url:url, 
        document:GET_TEACHER_PAY_QUERY,
        variables: variables
    }) as TakenLessons
    console.log(data)
  res.status(200).json(new TakenLessonTransforms().takenLessonTeacherPay(data));
    
}


export default {
    getAllTeachers,
    getTeacherPay
     };
     
     