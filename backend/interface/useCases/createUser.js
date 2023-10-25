const User = require('../../models/User')
const {fhash}= require('../../config/util')
 async function createUser(req,res){
    
    const hashSenha = fhash(req.body.senha)
    const user = new User({
        nome: req.body.nome,
        email: req.body.email,
        senha: hashSenha,
        cargo: req.body.cargo
    })
    const result = await user.save()
    const { senha, ...data } = await result.toJSON()
    res.send(data)

}
module.exports = createUser 