const crypto = require('crypto')
function fhash(data) {
    return crypto.createHash('sha256').update(data).digest('hex');
}
module.exports ={fhash}