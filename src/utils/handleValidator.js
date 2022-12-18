const {validationResult} = require('express-validator')
const {respondFailValidationErrors} = require('./handleHttpResponse')

/**
 * *Valid request
 * @param {response} req 
 * @param {response} res 
 * @param {next} next 
 * @returns {?next}
 */
const handleValidation = (req,res,next)=>{
	try{
        const errorFormatter = ({ location, msg, param, value, nestedErrors }) => {
            return {param,message:msg};
        };
        validationResult(req).formatWith(errorFormatter).throw()
        return next()
    }catch(error){
        return respondFailValidationErrors(res,error.array())
    }
}

module.exports = handleValidation

// * https://express-validator.github.io/docs/validation-result-api.html
