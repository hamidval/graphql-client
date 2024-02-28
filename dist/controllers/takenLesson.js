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
const getTakenLessons_1 = require("../queries/getTakenLessons");
const validationUtils_1 = require("../validation/validationUtils");
const takenLessons_1 = __importDefault(require("../transforms/takenLessons"));
/**
 * @openapi
 * /TakenLessons:
 *   get:
 *     description: This returns a list of fixtures for a competition and date or match day, sorted by kick off time or by home team name, optionally truncated and with hidden matches filtered out.
 *     summary: Find Fixtures for a competition Id and match Day and sort
 *     tags:
 *       - TakenLessons
 *     parameters:
 *       - in: query
 *         name: id
 *         description: Get all lessons taken
 *         required: false
 *         schema:
 *           type: string
 *           format: string
 *       - in: query
 *         name: teacherId
 *         description: Get all lessons taken
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
function getTakenLessons(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        var url = 'http://localhost:4000/graphql';
        var { id, teacherId } = req.query;
        var variables = { takenLessonInput: { filter: { id: (0, validationUtils_1.checkNumber)(id), teacherId: (0, validationUtils_1.checkNumber)(teacherId) } } };
        var data = yield (0, graphql_request_1.default)({
            url: url,
            document: getTakenLessons_1.GET_ALL_TAKEN_LESSONS_QUERY,
            variables: variables
        });
        res.status(200).json(new takenLessons_1.default().takenLessons(data));
    });
}
exports.default = {
    getTakenLessons
};
//# sourceMappingURL=takenLesson.js.map