import { TakenLesson, TakenLessons } from "../generated/types";
import { TakenLessonList, TakenLesson as _TakenLesson } from "../types/takenLessons"



export default class TakenLessonTransforms {
    constructor(){}

    public takenLessons(data: TakenLessons) : TakenLessonList{
        return {
            lessons: data.takenLessons.map(x => this.takenLesson(x))
        }
    }

    public takenLesson(lesson: TakenLesson): _TakenLesson {
        return {
            Id: lesson.Id,
            Hours: lesson.Hours,
            Status: lesson.Status,
            Subject: lesson.Subject,
            IsDoubleLesson: this.isDoubleLesson(lesson.Hours)

        }        
    }

    public isDoubleLesson(hours: number):Boolean{
        return hours == 2;
    }

    public takenLessonTeacherPay(data: TakenLessons)
    {
        return data.takenLessons.reduce((partialSum, a) => partialSum + a.TotalPay, 0);
    }
}