"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const student_1 = __importDefault(require("../transforms/student"));
const students_1 = require("./students");
const studentFull = new student_1.default().students(students_1.studentQuery);
describe('checking types', () => {
    test('checking type of gql return object', () => {
        expect(studentFull).toBeTruthy();
    });
});
describe('checking values', () => {
    test('checking values of gql return object', () => {
        expect(studentFull.students[0].Id).toBe(1);
        expect(studentFull.students[1].Id).toBe(2);
        expect(studentFull.students[2].Id).toBe(3);
    });
});
//# sourceMappingURL=student.test.js.map