const Entrada_Estoque = require('../models/Entrada_Estoque');


const EntradasController = {
    createEntrada: async (req, res) => { // função assincrona que requista body e responde
        try {
            const novaEntrada = await Entrada_Estoque.create(req.body); //pausa a função até que request de body seja feito
            res.json(novaEntrada); //responde a nova entrada em formato JSON
        } catch (error) {
            res.status(500).send(error.message);//caso haja algum erro ele envia a mensagem de erro com status 500
        }  
    }
}

module.exports = EntradasController;