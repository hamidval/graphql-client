import { Students, Student } from "../generated/types";
import { StudentList, Student as _Student } from "../types/student";



export default class StudentTransform {

    constructor(){}

    public students(data: Students): StudentList {
        return {
           students: data.students.map(x => this.student(x))
        }
    }

    public student(student: Student): _Student {
        return {
            Id: student.Id,
            Lessons: student.Lessons
        }
    }   

}