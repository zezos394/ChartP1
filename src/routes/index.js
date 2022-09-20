
const meRouter = require('./me')
const siteRouter = require('./site')
const coursesRouter = require('./courses')
const chartsRouter = require('./charts')
const accountsRouter = require('./accounts')
const loginRouter = require('./login')
const registerRouter = require('./register')


function route(app){
    app.use('/me', meRouter)
    app.use('/courses', coursesRouter)
    app.use('/charts', chartsRouter)
    app.use('/accounts', accountsRouter)
    app.use('/', siteRouter)
    app.use('/login', loginRouter)
    app.use('/register', registerRouter)
}

module.exports = route;