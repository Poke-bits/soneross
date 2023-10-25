const {Router} = require("express");
const mainRouter = Router()
const userRouter = require('./user')
const utilitysRouter = require('./utilitys')
mainRouter.use("/user",userRouter)
mainRouter.use('/utilitys',utilitysRouter)


module.exports = mainRouter 

