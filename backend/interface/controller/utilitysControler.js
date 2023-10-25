const Upload = require('../../models/Upload')
const Formulario = require('../../models/Formulario')
const storageS3 = require('../../config/storageS3')
async function upload(req, res) {
    try {
        const upload = await Upload.create({
            imgName: req.file.originalname,
            size: req.file.size,
            key: req.file.key,
            url: req.file.location
        })
        return res.json(upload)
    } catch (error) {

        return res.status(500).json({ error: "erro ao fazer upload "+error })
    }

}

async function formulario(req, res) {
    try {

        const ultimoRegistro = await Formulario.findOne().sort({ _id: -1 });
        const novoNumero = ultimoRegistro ? parseInt(ultimoRegistro.codigo.split('-')[1]) + 1 : 1;
        const novoCodigo = `PSS-${novoNumero}`;

        const formulario = await Formulario.create({
            nome: req.body.nome,
            sobrenome: req.body.sobrenome,
            email: req.body.email,
            clinica: req.body.clinica,
            categoria: req.body.categoria,
            impacto: req.body.impacto,
            titulo: req.body.titulo,
            descricao: req.body.descricao,
            uploadIds: req.body.uploadIds,
            codigo: novoCodigo,
        })

        return res.json(formulario.codigo)
    } catch (error) {
        return res.status(500).json({ error: "erro ao criar o formulário" })
    }


}
async function deletar(req, res) {
    const id = req.params.id
    try {
        const result = await Upload.findOne({ _id: id })
        if (!result) {
            return res.status(404).send("Arquivo não encontrado");
        }
        const resultDelete = await Upload.deleteOne({ _id: id })

        if (resultDelete.deletedCount > 0) {
          
            const params = {
                Bucket: process.env.AWS_BUCKET_NAME,
                Key: result.key
            };
            storageS3.deleteObject(params, (err, data) => {
                if (err) {
                    console.log(err,"error");
                } else {
                    console.log("Arquivo deletado do S3");
                }
            });
            res.send("arquivo excluido com sucesso")
        }
    } catch (error) {
        res.send("não foi possivel deletar arquivo por conta do erro: " + error)
    }


}
module.exports = { upload, formulario, deletar }