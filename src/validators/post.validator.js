
const {check} = require('express-validator')
const handleValidation = require('./../utils/handleValidator')

const checkStore = [
    check('author')
        .notEmpty()
        .isNumeric()
        .trim()
        .escape()
        .custom(value=>{
            if(Number(value)< 1)
            {
                throw new Error('Invalid value (1)')
            }
            return true
        }),
    check('title')
        .notEmpty()
        .isLength({max:255})
        .trim()
        .escape(),
    check('content')
        .isLength({max:255})
        .trim()
        .escape()
        .optional(),
    check('published')
        .isBoolean()
        .trim()
        .escape()
        .optional(),
    (req,res,next)=>{ return handleValidation(req,res,next) }
]

const checkId = [
    check('id')
        .notEmpty()
        .isNumeric()
        .trim()
        .escape()
        .custom(value=>{
            if(Number(value)< 1)
            {
                throw new Error('Invalid value (1)')
            }
            return true
        }),
    (req, res, next) =>{ return handleValidation(req,res, next)}
]

const checkUpdate = [
    check('id')
        .notEmpty()
        .isNumeric()
        .trim()
        .escape()
        .custom(value=>{
            if(Number(value)< 1)
            {
                throw new Error('Invalid value (1)')
            }
            return true
        }),
    check('title')
        .isLength({max:255})
        .trim()
        .escape()
        .optional(),
    check('content')
        .isLength({max:255})
        .trim()
        .escape()
        .optional(),
    check('published')
        .isBoolean()
        .trim()
        .escape()
        .optional(),
    (req,res,next)=>{ return handleValidation(req,res,next) }
]

module.exports = {checkStore, checkId, checkUpdate}

// * https://express-validator.github.io/docs/sanitization.html
// * https://express-validator.github.io/docs/custom-validators-sanitizers.html
// * https://express-validator.github.io/docs/custom-error-messages.html
