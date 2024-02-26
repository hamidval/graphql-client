import { gql } from "graphql-request";



export const GET_ALL_TAKEN_LESSONS_QUERY = gql`
query Query($takenLessonInput: TakenLessonInput) {
    takenLessons(takenLessonInput: $takenLessonInput) {
      Id
      Hours
      Status
      Subject
    }
  }
`;