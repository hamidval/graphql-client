import { gql } from "graphql-request";



export const GET_STUDENT_LESSONS_QUERY = gql`
query Query($studentInput: StudentInput) {
    students(studentInput: $studentInput) {
      Id
      Lessons {
        Id
        Subject
        Day
      }
    }
  }
`;