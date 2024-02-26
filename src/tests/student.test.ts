import StudentTransform from "../transforms/student";
import { StudentList } from "../types/student";
import { studentQuery } from "./students";

const studentFull = new StudentTransform().students(studentQuery);


describe('checking types', () =>{
    test('checking type of gql return object',()=>{
        expect(studentFull as StudentList).toBeTruthy();
    })
})


describe('checking values', () =>{
    test('checking values of gql return object',()=>{
        expect(studentFull.students[0].Id).toBe(1)
        expect(studentFull.students[1].Id).toBe(2)
        expect(studentFull.students[2].Id).toBe(3)
    })
})