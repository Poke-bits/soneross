const express = require('express')
const router = require('./router')
const cors = require('cors')
const multer = require('multer')
const helmet = require('helmet')
const morgan = require('morgan')
const mainRouter = require('./router')

module.exports = function startHttp() {
    const app = express()
    app.listen(8000)
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(cors());
    app.use(helmet())
    app.use("/v1",mainRouter)
    // app.use("/v1",multer,mainRouter) adicionar middleware de validação autenticação
    app.use(morgan("dev"))
    app.use('/', router)
}