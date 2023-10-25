const {Router} = require('express')
const userRouter = Router()
const userControle = require('../../controller/userControler')
const {middlewareAutentication} = require('../../middleware/autenticationMiddleware')
userRouter.post('/registrar',middlewareAutentication,userControle.createUser)
userRouter.post('/login',userControle.login)
module.exports = userRouter 