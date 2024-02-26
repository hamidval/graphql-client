import { gql } from "graphql-request";



export const GET_TEACHER_PAY_QUERY = gql`
query Query($takenLessonInput: TakenLessonInput) {
    takenLessons(takenLessonInput: $takenLessonInput) {
      Id
      TotalPay
    }
  }
`;