const aws = require('aws-sdk')
const storageS3 = new aws.S3({
    accessKeyId: "AKIAW5AI2B7PU4HVKWZA",
    secretAccessKey: "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",
    region: "sa-east-1",
})
module.exports = storageS3