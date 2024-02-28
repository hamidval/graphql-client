"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_STUDENT_LESSONS_QUERY = void 0;
const graphql_request_1 = require("graphql-request");
exports.GET_STUDENT_LESSONS_QUERY = (0, graphql_request_1.gql) `
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
//# sourceMappingURL=getStudentLessons.js.map