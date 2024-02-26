import { oneOf, query } from 'express-validator';
import { requiredField, requiredOneOfField, fieldIsType, fieldGreaterThanZero } from './validationUtils';

function getParentValidation() {
    return [
     
      query('parentId').optional().isInt().withMessage(fieldIsType('to', 'number'))
    ];
  }
  


  export default {
    getParentValidation
  };
  
