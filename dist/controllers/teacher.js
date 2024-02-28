"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_request_1 = __importDefault(require("graphql-request"));
const getTeachersQuery_1 = require("../queries/Teacher/getTeachersQuery");
const validationUtils_1 = require("../validation/validationUtils");
const teachers_1 = __importDefault(require("../transforms/teachers"));
const getTeacherPayQuery_1 = require("../queries/Teacher/getTeacherPayQuery");
const takenLessons_1 = __importDefault(require("../transforms/takenLessons"));
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
function getAllTeachers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        var url = 'http://localhost:4000/graphql';
        var { id } = req.query;
        console.log(id);
        var variables = { teacherInput: { filter: { id: (0, validationUtils_1.checkNumber)(id) } } };
        var data = yield (0, graphql_request_1.default)({
            url: url,
            document: getTeachersQuery_1.GET_TEACHER_QUERY,
            variables: variables
        });
        res.status(200).json(new teachers_1.default().teachers(data));
    });
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
function getTeacherPay(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        var url = 'http://localhost:4000/graphql';
        var { teacherId } = req.query;
        var variables = { takenLessonInput: { filter: { teacherId: (0, validationUtils_1.checkNumber)(teacherId) } } };
        var data = yield (0, graphql_request_1.default)({
            url: url,
            document: getTeacherPayQuery_1.GET_TEACHER_PAY_QUERY,
            variables: variables
        });
        console.log(data);
        res.status(200).json(new takenLessons_1.default().takenLessonTeacherPay(data));
    });
}
exports.default = {
    getAllTeachers,
    getTeacherPay
};
//# sourceMappingURL=teacher.js.map