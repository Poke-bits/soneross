const crypto = require('crypto')
const multerS3 = require('multer-s3')
const storageS3 = require('../config/storageS3')
require('dotenv').config()

console.log("heueu")
const multerConfig = {
   storage: multerS3({
      s3: storageS3,
      bucket: "soneros",
      acl: 'public-read',
      contentType: multerS3.AUTO_CONTENT_TYPE,
      key: (req, file, cb) => {
         
         try{
         crypto.randomBytes(16, (err, hash) => {
            if (err) {
               cb(err)
            } else {
               const fileName = `${hash.toString('hex')}-${file.originalname}`
               cb(null, fileName)
            }
         })
         }catch(error){
            console.log(error,"ERRO do MULTERConfig")
         }}
   }),
   fileFilter: (req, file, cb) => {
      const tiposArquivosPermitidos = [
         'image/jpeg',
         'image/pjpeg',
         'image/gif',
         'image/png',
         'image/webp',
         'image/bmp',
         'application/pdf',
         'video/mp4',
         'video/avi',
         'video/mkv',
         'video/quicktime',
         'video/x-ms-wmv',
         'audio/mpeg',
         'audio/wave',
         'audio/wav',
         'audio/ogg',
         'audio/m4a',
         'audio/aac',
         'audio/flac',
         'audio/wma',
         'audio/midi',
         'audio/x-ms-wma',
         'audio/amr',
         'text/plain'
      ]
      if (tiposArquivosPermitidos.includes(file.mimetype)) {
         cb(null, true)
      } else {
         cb(new Error('tipo de arquivo inválido'))
      }
   }
}


module.exports =  multerConfig 




