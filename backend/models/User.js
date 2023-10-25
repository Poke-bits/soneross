const { mongoose, model } = require("mongoose");
const userSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true },
    senha: { type: String, reuqired: true },
    cargo: { type: String, required: false }

}, { timestamp: true })

module.exports = mongoose.model('User', userSchema)