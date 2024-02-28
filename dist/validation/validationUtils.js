"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkNumber = exports.fieldGreaterThanZero = exports.fieldIsType = exports.requiredOneOfField = exports.requiredField = exports.sendValidationResponse = void 0;
function sendValidationResponse(res, result) {
    res.status(400).send({ errors: result.array().map((x) => x.msg) });
}
exports.sendValidationResponse = sendValidationResponse;
function requiredField(fieldName) {
    return `${fieldName} is required`;
}
exports.requiredField = requiredField;
function requiredOneOfField(fieldName1, fieldName2) {
    return `${fieldName1} or ${fieldName2} is required`;
}
exports.requiredOneOfField = requiredOneOfField;
function fieldIsType(fieldName, typeName) {
    return `${fieldName} must be a ${typeName}`;
}
exports.fieldIsType = fieldIsType;
function fieldGreaterThanZero(fieldName) {
    return `${fieldName} must be greater than zero`;
}
exports.fieldGreaterThanZero = fieldGreaterThanZero;
function checkNumber(param) {
    if (param == undefined || param == null) {
        return null;
    }
    return Number(param);
}
exports.checkNumber = checkNumber;
//# sourceMappingURL=validationUtils.js.map