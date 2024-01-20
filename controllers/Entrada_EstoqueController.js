const Entrada_Estoque = require('../models/Entrada_Estoque');


const EntradasController = {
    createEntrada: async (req, res) => { // função assincrona que requista body e responde
        try {
            const novaEntrada = await Entrada_Estoque.create(req.body); //pausa a função até que request de body seja feito
            res.json(novaEntrada); //responde a nova entrada em formato JSON
        } catch (error) {
            res.status(500).send(error.message);//caso haja algum erro ele envia a mensagem de erro com status 500
        }  
    },
    getAllEntradas: async (req, res) => {
        try {
            const getEntradas = await Entrada_Estoque.findAll(req.body);
            res.json(getEntradas);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    getEntradaByID: async (req, res) => {
        try {
            const getEntrada = await Entrada_Estoque.findByPk(req.params.id);
            if (!getEntrada) {
                return res.status(404).send('Entrada não encontrado');
            }
            res.json(getEntrada)
        } catch(error) {
            res.status(500).send(error.message);
        }
    },
    getEntradaByProdutoID: async (req, res) => {
        try {
            const getEntradasProduto = await Entrada_Estoque.sequelize
                .query(`SELECT * FROM Entrada_Estoques WHERE id_produto = ${req.params.id_p}`);
            
            if (!getEntradasProduto) {
                return res.status(404).send('Entrada não encontrado');
            }    
            res.json(getEntradasProduto)
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
    
}

module.exports = EntradasController;