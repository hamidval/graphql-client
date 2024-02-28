"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_TEACHER_QUERY = void 0;
const graphql_request_1 = require("graphql-request");
exports.GET_TEACHER_QUERY = (0, graphql_request_1.gql) `
query Query($teacherInput: TeacherInput) {
    teachers(teacherInput: $teacherInput) {
      Id
      FirstName
      LastName
    }
  }
`;
//# sourceMappingURL=getTeachersQuery.js.map