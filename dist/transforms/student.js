"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StudentTransform {
    constructor() { }
    students(data) {
        return {
            students: data.students.map(x => this.student(x))
        };
    }
    student(student) {
        return {
            Id: student.Id,
            Lessons: student.Lessons
        };
    }
}
exports.default = StudentTransform;
//# sourceMappingURL=student.js.map