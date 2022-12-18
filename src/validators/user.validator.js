
const {check} = require('express-validator')
const handleValidation = require('./../utils/handleValidator')

const checkStore = [
    check('name')
        .notEmpty()
        .isLength({max:255})
        .trim()
        .escape(),
    check('email')
        .notEmpty()
        .isLength({max:255})
        .trim()
        .escape()
        .normalizeEmail(),
    check('bio')
        .isLength({max:255})
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
    check('name')
        .isLength({max:255})
        .trim()
        .escape()
        .optional(),
    check('email')
        .isLength({max:255})
        .trim()
        .escape()
        .normalizeEmail()
        .optional(),
    check('bio')
        .isLength({max:255})
        .trim()
        .escape()
        .optional(),
    (req,res,next)=>{ return handleValidation(req,res,next) }
]

const checkDestroy = [
    check('id')
        .notEmpty()
        .isNumeric()
        .trim()
        .escape()
        .custom(value=>{
            if(Number(value)< 2)
            {
                throw new Error('Invalid value (1)')
            }
        }),
    (req, res, next) =>{ return handleValidation(req,res, next)}
]

module.exports = {checkStore, checkId, checkUpdate, checkDestroy}

// * https://express-validator.github.io/docs/sanitization.html
// * https://express-validator.github.io/docs/custom-validators-sanitizers.html
// * https://express-validator.github.io/docs/custom-error-messages.html
