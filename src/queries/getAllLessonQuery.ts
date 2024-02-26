import { gql } from "graphql-request";



export const GET_ALL_LESSONS_QUERY = gql`
query Query($lessonInput: LessonInput) {
    lessons(lessonInput: $lessonInput) {
      Id
      Subject
      Day
    }
  }
`;