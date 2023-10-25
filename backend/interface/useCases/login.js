const User = require('../../models/User')
const jwt= require('jsonwebtoken')
const {fhash}= require('../../config/util')
async function Login (req, res) {
 
    const senha =  fhash(req.body.senha)
    const user = await User.findOne({ email: req.body.email ,senha},{senha:0})
    if (!user) {
        return res.status(400).send({ message: "credenciais invalidas" })
    }
   
    const token = jwt.sign({ _id: user._id }, process.env.NEXTAUTH_SECRET)
    res.cookie('jwt', token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000
    })
    res.status(200).send({ token, user })
}
module.exports = Login