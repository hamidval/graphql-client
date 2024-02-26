import express from 'express';

import parents from '../controllers/parent';
import students from '../controllers/student';
import lessons from '../controllers/lessons';
import takenLessons from '../controllers/takenLesson';
import teachers from '../controllers/teacher';

import parentsValidation from '../validation/parentValidation';
const router = express.Router();

router.get('/', (_, res) => res.redirect('/swagger'));

router.get(
    '/Parents',
    parentsValidation.getParentValidation(),
    parents.Parents);


router.get('/Students', students.getStudentsById);
router.get('/Students/Lessons', students.getStudentLessons);
router.get('/Lessons', lessons.getLessons);
router.get('/TakenLessons', takenLessons.getTakenLessons);
router.get('/Teachers', teachers.getAllTeachers);
router.get('/Teachers/Earnings', teachers.getTeacherPay);



export = router;