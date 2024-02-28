"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TeacherTransform {
    constructor() { }
    teachers(data) {
        return {
            teachers: data.teachers.map(x => this.teacher(x))
        };
    }
    teacher(teacher) {
        return {
            Id: teacher.Id,
            FirstName: teacher.FirstName,
            LastName: teacher.LastName
        };
    }
}
exports.default = TeacherTransform;
//# sourceMappingURL=teachers.js.map