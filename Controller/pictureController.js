const fs = require('fs') //file system do express
const Picture = require('../models/Picture.js')

exports.create = async (req, res) => {
    try {
        const { nome } = req.body
        const file = req.file

        const picture = new Picture({
            nome,
            src: file.path,
        })

        await picture.save()
        res.json({picture, msg: "imagem salva"})
    } catch (err) {
        res.status(500 ).json({msg:'erro ao salvar imagem'})
    }
}

exports.findAll = async (req, res) => {
    try {
        const pictures = await Picture.find()

        res.status(200).json(pictures)

    } catch (err) {
        res.status(500).json({msg:'erro ao buscar imagem'})
    }
}

exports.remove = async (req, res) => {
    try {
        const picture = await Picture.findById(req.params.id)
        if(!picture) { 
            return res.status(404).json({msg:'essa imagem não existe'})
        }
            fs.unlinkSync(picture.src); //operação sincrona para exluir arquivo da maquina

            await picture.deleteOne();
            
            res.json({msg:'imagem removida !'})
    } catch (err) {
        res.status(500).json({msg:'erro ao remover imagem !', err})
    }
}