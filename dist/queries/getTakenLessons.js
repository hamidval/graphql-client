"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_ALL_TAKEN_LESSONS_QUERY = void 0;
const graphql_request_1 = require("graphql-request");
exports.GET_ALL_TAKEN_LESSONS_QUERY = (0, graphql_request_1.gql) `
query Query($takenLessonInput: TakenLessonInput) {
    takenLessons(takenLessonInput: $takenLessonInput) {
      Id
      Hours
      Status
      Subject
    }
  }
`;
//# sourceMappingURL=getTakenLessons.js.map