const express = require('express')
require('express-group-routes')
const userApi = require('./routers/user.router')
const postApi = require('./routers/post.router')

const app = express()

app.use(express.json())

userApi(app)
postApi(app)

module.exports = app

// * https://www.npmjs.com/package/express
