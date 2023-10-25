const mongoose = require('mongoose')
const FormularioSchema = new mongoose.Schema({

    nome: String,
    sobrenome:String,
    email:String,
    clinica:String,
    categoria:Array,
    impacto:String,
    titulo:String,
    descricao:String,
    uploadIds:Array,
    codigo:String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model("Formulario", FormularioSchema)
