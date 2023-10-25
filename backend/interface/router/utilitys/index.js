const { Router } = require('express')
const utilitysRouter = Router()
const multer = require('multer')
const utilitysControler = require('../../controller/utilitysControler')
const multerConfig = require('../../../config/multer')
const upload = multer(multerConfig);
utilitysRouter.post('/upload', upload.single('file'), utilitysControler.upload)
utilitysRouter.post('/formulario', utilitysControler.formulario)
utilitysRouter.delete('/upload/delete/:id', utilitysControler.deletar)


module.exports = utilitysRouter 