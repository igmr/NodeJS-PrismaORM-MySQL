const {matchedData} = require('express-validator')
const respondException = require('./../utils/handleException')
const {respond, respondFail, respondCreated} = require('./../utils/handleHttpResponse')
const postService = require('./../services/post.service')
const {existUserById} = require('./../services/user.service')

const create = async (req, res, next)=>{
    try {
        req = matchedData(req, { locations:['body']})
        const existUser = await existUserById(req.author)
        if(existUser == 0)return respondFail(res, 'User, not found')
        const payload = {
            authorId:  Number(req.author),
            title:     req.title,
            content:   req.content || '',
            published: req.published || false,
        }
        const post = await postService.create(payload)
        return respondCreated(res, post)
    } catch (ex) {
        return respondException(res, ex)
    }
}

const findAll = async (req, res, next)=>{
    try {
        const posts = await postService.findAll()
        return respond(res, posts)
    } catch (ex) {
        return respondException(res, ex)
    }
}

const find = async (req, res, next)=>{
    try {
        const {id} = matchedData(req, {locations:['params']})
        const existPost = await postService.existPostById(id)
        if(existPost == 0) return respondFail(res, 'Post, not found')
        const post = await postService.find(id)
        return respond(res, post)
    } catch (ex) {
        return respondException(res, ex)
    }
}

const update = async (req, res, next)=>{
    try {
        const {id} = matchedData(req, {locations:['params']})
        req = matchedData(req, {locations:['body']})
        if(Object.entries(req).length == 0) return respondFail(res, 'Data, not found')
        const existPost = await postService.existPostById(id)
        if(existPost == 0) return respondFail(res, 'Post, no found')
        let payload = {updatedAt: new Date()}
        if(req.title)
            payload = {...payload, title: req.title}
        if(req.content)
            payload = {...payload, content: req.content}
        if(req.published)
            payload = {...payload, published: req.published}
        const post = await postService.update(id, payload)
        return respond(res, post)
    } catch (ex) {
        return respondException(res, ex)
    }
}

const destroy = async (req, res, next)=>{
    try {
        const {id} = matchedData(req, {locations:['params']})
        const existPost = await postService.existPostById(id)
        if(existPost == 0) return respondFail(res, 'Post, not found')
        const post = await postService.destroy(id)
        return respond(res, post)
    } catch (ex) {
        return respondException(res, ex)
    }
}

module.exports = {create, findAll, find,
    update, destroy}

// * https://express-validator.github.io/docs/matched-data-api.html
