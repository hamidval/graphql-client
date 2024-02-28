"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_request_1 = __importDefault(require("graphql-request"));
const getAllLessonQuery_1 = require("../queries/getAllLessonQuery");
const lessons_1 = __importDefault(require("../transforms/lessons"));
const validationUtils_1 = require("../validation/validationUtils");
const express_validator_1 = require("express-validator");
const validationUtils_2 = require("../validation/validationUtils");
/**
 * @openapi
 * /Lessons:
 *   get:
 *     description: This returns a list of fixtures for a competition and date or match day, sorted by kick off time or by home team name, optionally truncated and with hidden matches filtered out.
 *     summary: Find Fixtures for a competition Id and match Day and sort
 *     tags:
 *       - Lessons
 *     parameters:
 *       - in: query
 *         name: id
 *         description: Fixture daily id to filter by
 *         required: false
 *         schema:
 *           type: integer
 *           format: int64
 *       - in: query
 *         name: day
 *         description: Array of ids of stats to return
 *         required: false
 *         schema:
 *           type: integer
 *           format: int64
 *       - in: query
 *         name: studentId
 *         description: App name otherwise the configured default in SSN Football App (SSN-UK) is used
 *         required: false
 *         schema:
 *           type: integer
 *           format: int64
 *       - in: query
 *         name: locale
 *         description: Language to return
 *         required: false
 *         schema:
 *           type: string
 *           format: string
 *     responses:
 *       200:
 *         description: Successful operation.
 *       400:
 *         description: Invalid Input.
 *       500:
 *         description: Internal server error.
 *       404:
 *         description: Not found.
 */
function getLessons(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = (0, express_validator_1.validationResult)(req);
        if (!result.isEmpty()) {
            (0, validationUtils_2.sendValidationResponse)(res, result);
            return;
        }
        var { id, day, studentId } = req.query;
        var variables = { lessonInput: { filter: { id: (0, validationUtils_1.checkNumber)(id), day: (0, validationUtils_1.checkNumber)(day), studentId: (0, validationUtils_1.checkNumber)(studentId) } } };
        var url = 'http://localhost:4000/graphql';
        var data = yield (0, graphql_request_1.default)({
            url: url,
            document: getAllLessonQuery_1.GET_ALL_LESSONS_QUERY,
            variables: variables
        });
        res.status(200).json(new lessons_1.default().lessons(data));
    });
}
exports.default = {
    getLessons
};
//# sourceMappingURL=lessons.js.map