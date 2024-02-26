import { gql } from "graphql-request";



export const GET_TEACHER_QUERY = gql`
query Query($teacherInput: TeacherInput) {
    teachers(teacherInput: $teacherInput) {
      Id
      FirstName
      LastName
    }
  }
`;