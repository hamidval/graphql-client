"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TakenLessonTransforms {
    constructor() { }
    takenLessons(data) {
        return {
            lessons: data.takenLessons.map(x => this.takenLesson(x))
        };
    }
    takenLesson(lesson) {
        return {
            Id: lesson.Id,
            Hours: lesson.Hours,
            Status: lesson.Status,
            Subject: lesson.Subject,
            IsDoubleLesson: this.isDoubleLesson(lesson.Hours)
        };
    }
    isDoubleLesson(hours) {
        return hours == 2;
    }
    takenLessonTeacherPay(data) {
        return data.takenLessons.reduce((partialSum, a) => partialSum + a.TotalPay, 0);
    }
}
exports.default = TakenLessonTransforms;
//# sourceMappingURL=takenLessons.js.map