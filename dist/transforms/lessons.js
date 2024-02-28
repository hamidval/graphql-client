"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LessonTransform {
    constructor() { }
    lessons(data) {
        return {
            lessons: data.lessons.map(x => this.lesson(x))
        };
    }
    lesson(lesson) {
        return {
            Id: lesson.Id
        };
    }
}
exports.default = LessonTransform;
//# sourceMappingURL=lessons.js.map