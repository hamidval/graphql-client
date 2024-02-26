import { Lessons } from "../generated/types";
import { Lesson, Lesson as _Lesson, Lessons as _Lessons } from "../types/lessons";
export default class LessonTransform {
    constructor(){}


    public lessons(data: Lessons): _Lessons{

        return {
            lessons: data.lessons.map(x => this.lesson(x))
        }
    }
    
    public lesson(lesson: Lesson): _Lesson {
        return {
            Id: lesson.Id
        }
    }
}