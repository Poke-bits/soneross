const jwt = require('jsonwebtoken')
const User = require('../../models/User')
async function middlewareAutentication (req, res,next) {
    const token = req.header('cookie');
  
  if (!token) {
    return res.status(401).json({ mensagem: 'Token não encontrado' });
  }

  try {
    const jwtValue = token.split('=')[1];
    const decoded = jwt.verify(jwtValue, process.env.NEXTAUTH_SECRET);
    const usuarioId = decoded._id;
    
    const user = await User.findOne({ _id: usuarioId},{senha:0})
    if (!user){
        return res.status(401).json({mensagem:"token invalido ou não atribuido a nenhum usuário"})
    }
   
    next();
  }catch (error) {
    console.log(error)
    return res.status(401).json({ mensagem: 'Token inválido' });
  }
}

module.exports = {middlewareAutentication}