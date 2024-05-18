require('dotenv/config')
const connectMongoDb = require('./lib/Db')
const startHttp = require('./interface')

class StartServer {
 database= connectMongoDb
 http= startHttp
 constructor(){
    this.run()
 }
    run(){
        this.http()
       this.database()
    }
    
}
new StartServer ()