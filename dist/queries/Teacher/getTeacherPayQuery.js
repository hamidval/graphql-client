"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_TEACHER_PAY_QUERY = void 0;
const graphql_request_1 = require("graphql-request");
exports.GET_TEACHER_PAY_QUERY = (0, graphql_request_1.gql) `
query Query($takenLessonInput: TakenLessonInput) {
    takenLessons(takenLessonInput: $takenLessonInput) {
      Id
      TotalPay
    }
  }
`;
//# sourceMappingURL=getTeacherPayQuery.js.map