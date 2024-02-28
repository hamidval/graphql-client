"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const graphql_request_1 = __importStar(require("graphql-request"));
const student_1 = __importDefault(require("../transforms/student"));
const getStudentLessons_1 = require("../queries/getStudentLessons");
const validationUtils_1 = require("../validation/validationUtils");
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
function getStudentsById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const document = (0, graphql_request_1.gql) `
    query Query($studentInput: StudentInput) {
        students(studentInput: $studentInput) {
          Id
          FirstName
        }
      }
  `;
        var url = 'http://localhost:4000/graphql';
        var { studentId } = req.query;
        var variables = { studentInput: { filter: { id: studentId } } };
        var data = yield (0, graphql_request_1.default)({
            url: url,
            document: document,
            variables: variables
        });
        res.status(200).json(new student_1.default().students(data));
    });
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
function getStudentLessons(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        var url = 'http://localhost:4000/graphql';
        var { studentId } = req.query;
        var variables = { studentInput: { filter: { id: (0, validationUtils_1.checkNumber)(studentId), inlcudeLessons: true } } };
        var data = yield (0, graphql_request_1.default)({
            url: url,
            document: getStudentLessons_1.GET_STUDENT_LESSONS_QUERY,
            variables: variables
        });
        console.log(data);
        res.status(200).json(new student_1.default().students(data));
    });
}
exports.default = {
    getStudentsById,
    getStudentLessons
};
//# sourceMappingURL=student.js.map