"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const validationUtils_1 = require("./validationUtils");
function getParentValidation() {
    return [
        (0, express_validator_1.query)('parentId').optional().isInt().withMessage((0, validationUtils_1.fieldIsType)('to', 'number'))
    ];
}
exports.default = {
    getParentValidation
};
//# sourceMappingURL=parentValidation.js.map