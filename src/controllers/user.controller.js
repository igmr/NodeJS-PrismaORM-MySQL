const {matchedData} = require('express-validator')
const respondException = require('./../utils/handleException')
const {respond, respondFail, respondCreated} = require('./../utils/handleHttpResponse')
const userService = require('./../services/user.service')

const create = async(req, res, next)=>{
    try {
        const payload = matchedData(req, {locations:['body']})
        const existsEmail = await userService.existUserByEmail(payload.email)
        if(existsEmail > 0) return respondFail(res, 'Email invalid')
        const user = await userService.create(payload)
        return respondCreated(res, user)
    } catch (ex) {
        return respondException(res, ex)
    }
}

const findAll = async(req, res, next)=>{
    try {
        const users = await userService.findAll()
        return respond(res, users)
    } catch (ex) {
        return respondException(res, ex)
    }
}

const find = async(req, res, next)=>{
    try {
        const {id} = matchedData(req,{locations:['params']})
        const existUser = await userService.existUserById(id)
        if(existUser == 0) return respondFail(res,'User not found')
        const user = await userService.find(id)
        return respond(res, user)
    } catch (ex) {
        return respondException(res, ex)
    }
}

const update = async(req, res, next)=>{
    try {
        const payload = matchedData(req, {locations:['body']})
        const {id} = matchedData(req, {locations:['params']})
        if(Object.entries(payload).length == 0 || Number(id) <= 0)
            return respondFail(res, 'Data not fount')
        const existUser = await userService.existUserById(id)
        if(existUser == 0) return respondFail(res, 'User not fount')
        const user = await userService.update(id, payload)
        return respond(res, user)
    } catch (ex) {
        return respondException(res, ex)
    }
}

const destroy = async(req, res, next)=>{
    try {
        const {id} = matchedData(req, {locations:['params']})
        const existUser = await userService.existUserById(id)
        if(existUser == 0) return respondFail(res, 'User, not found')
        const user = await userService.destroy(id)
        return respond(res, user)
    } catch (ex) {
        return respondException(res, ex)
    }
}

module.exports = {create, findAll, find,
    update, destroy}

// * https://express-validator.github.io/docs/matched-data-api.html
