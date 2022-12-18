const app = require('./src/app')

const port = process.env.port || 3001

const runServer = ()=>{
    app.listen(port, ()=>console.info(`Server listening in http://localhost:${port}`))
}

const main = ()=>{
    runServer()
}

main()
