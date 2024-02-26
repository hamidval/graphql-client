import { Lessons, Teacher, TeacherData } from "../generated/types";
import { Teacher as _Teacher, TeacherList} from "../types/teacher";
export default class TeacherTransform {
    constructor(){}


    public teachers(data: TeacherData): TeacherList { 

        return {
            teachers: data.teachers.map(x => this.teacher(x))
        }
    }
    
    public teacher(teacher: Teacher): _Teacher {
        return {
            Id: teacher.Id,
            FirstName: teacher.FirstName,
            LastName: teacher.LastName
        }
    }
}