import { Response } from 'express';
import { Result, ValidationError } from 'express-validator';

function sendValidationResponse(res: Response, result: Result<ValidationError>) {
  res.status(400).send({ errors: result.array().map((x) => x.msg) });
}

function requiredField(fieldName: string) {
  return `${fieldName} is required`;
}

function requiredOneOfField(fieldName1: string, fieldName2: string) {
  return `${fieldName1} or ${fieldName2} is required`;
}

function fieldIsType(fieldName: string, typeName: string) {
  return `${fieldName} must be a ${typeName}`;
}

function fieldGreaterThanZero(fieldName: string) {
  return `${fieldName} must be greater than zero`;
}

function checkNumber(param:any)
{
  if(param == undefined || param == null){
    return null;
  }

  return Number(param)
}
export { sendValidationResponse, requiredField, requiredOneOfField, fieldIsType, fieldGreaterThanZero, checkNumber };
