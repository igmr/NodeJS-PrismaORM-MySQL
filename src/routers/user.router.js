
const {checkStore, checkId, checkUpdate, checkDestroy} = require('./../validators/user.validator')
const {create, findAll, find,
    update, destroy} = require('./../controllers/user.controller')

const userApi = (app)=>{
    app.group('/api/user', (router)=>{
        router.post('/',checkStore, create)
        router.get('/', findAll)
        router.get('/:id',checkId, find)
        router.put('/:id',checkUpdate, update)
        router.delete('/:id',checkDestroy, destroy)
    })
}

module.exports = userApi

//* https://www.npmjs.com/package/express-group-routes
