"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const parent_1 = __importDefault(require("../controllers/parent"));
const student_1 = __importDefault(require("../controllers/student"));
const lessons_1 = __importDefault(require("../controllers/lessons"));
const takenLesson_1 = __importDefault(require("../controllers/takenLesson"));
const teacher_1 = __importDefault(require("../controllers/teacher"));
const parentValidation_1 = __importDefault(require("../validation/parentValidation"));
const router = express_1.default.Router();
router.get('/', (_, res) => res.redirect('/swagger'));
router.get('/Parents', parentValidation_1.default.getParentValidation(), parent_1.default.Parents);
router.get('/Students', student_1.default.getStudentsById);
router.get('/Students/Lessons', student_1.default.getStudentLessons);
router.get('/Lessons', lessons_1.default.getLessons);
router.get('/TakenLessons', takenLesson_1.default.getTakenLessons);
router.get('/Teachers', teacher_1.default.getAllTeachers);
router.get('/Teachers/Earnings', teacher_1.default.getTeacherPay);
module.exports = router;
//# sourceMappingURL=index.js.map