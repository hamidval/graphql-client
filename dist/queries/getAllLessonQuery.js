"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_ALL_LESSONS_QUERY = void 0;
const graphql_request_1 = require("graphql-request");
exports.GET_ALL_LESSONS_QUERY = (0, graphql_request_1.gql) `
query Query($lessonInput: LessonInput) {
    lessons(lessonInput: $lessonInput) {
      Id
      Subject
      Day
    }
  }
`;
//# sourceMappingURL=getAllLessonQuery.js.map