import { Lesson } from "./lessons"


export type StudentList = {
    students: Student[]
}

export type Student = {
    Id: number
    Lessons: Lesson[]
}