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
const parents_1 = require("./parents");
const students_1 = require("./students");
const parents_2 = __importDefault(require("../transforms/parents"));
const parentFull = new parents_2.default().parents(parents_1.parentQuery);
describe('get first 10 parents when id is null', function () {
    test('Test query are expected types', () => {
        expect(parentFull).toBeTruthy();
    });
    test('Test query are expected types', () => {
        expect(students_1.studentQuery).toBeTruthy();
    });
});
describe('Test transforms return correct data', () => {
    test('parent transform', () => __awaiter(void 0, void 0, void 0, function* () {
        expect(parentFull.parents[0].Id).toBe(1);
        expect(parentFull.parents[1].Id).toBe(321);
        expect(parentFull.parents[2].Id).toBe(322);
        expect(parentFull.parents[3].Id).toBe(323);
        expect(parentFull.parents[4].Id).toBe(590);
        expect(parentFull.parents[5].Id).toBe(591);
        expect(parentFull.parents[6].Id).toBe(592);
        expect(parentFull.parents[7].Id).toBe(593);
    }));
});
//# sourceMappingURL=parent.test.js.map