const mongoose = require('mongoose')

const url = process.env.MONGO_URL

module.exports = connectMongoDb = async () => {
    try {
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        mongoose.set('debug', true)
        console.log('conectado ao mongoDB')
    } catch (error) {
        console.log('não conectado por causa do erro', error)
    }
}