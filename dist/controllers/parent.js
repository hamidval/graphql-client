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
const graphql_request_1 = require("graphql-request");
const parents_1 = __importDefault(require("../transforms/parents"));
/**
 * @openapi
 * /Parents:
 *   get:
 *     description: This returns a list of fixtures for a competition and date or match day, sorted by kick off time or by home team name, optionally truncated and with hidden matches filtered out.
 *     summary: Find Fixtures for a competition Id and match Day and sort
 *     tags:
 *       - Parents
 *     parameters:
 *       - in: query
 *         name: parentId
 *         description: Get all parents
 *         required: false
 *         schema:
 *           type: number
 *           format: number
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
function Parents(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const document = (0, graphql_request_1.gql) `
    query {
        parents {
            Id
            FirstName
            LastName  
        }
      }
  `;
        var url = 'http://localhost:4000/graphql';
        var variables = { studentInput: { filter: { id: null } } };
        var data = yield (0, graphql_request_1.request)(url, document);
        res.status(200).json(new parents_1.default().parents(data));
    });
}
exports.default = {
    Parents
};
//# sourceMappingURL=parent.js.map