const {checkStore, checkId, checkUpdate} = require('./../validators/post.validator')
const {create, findAll, find,
    update, destroy} = require('./../controllers/post.controller')

const postApi = (app)=>{
    app.group('/api/post', (router)=>{
        router.post('/',checkStore, create)
        router.get('/', findAll)
        router.get('/:id',checkId, find)
        router.put('/:id',checkUpdate, update)
        router.delete('/:id',checkId, destroy)
    })
}

module.exports = postApi

//* https://www.npmjs.com/package/express-group-routes
