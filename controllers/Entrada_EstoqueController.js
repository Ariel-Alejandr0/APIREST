const Entrada_Estoque = require('../models/Entrada_Estoque');


const EntradasController = {
    createEntrada: async (req, res) => { // função assincrona que requista body e responde
        try {
            const novaEntrada = await Entrada_Estoque.create(req.body);
            res.json(novaEntrada); 
        } catch (error) {
            res.status(500).send(error.message);
        }  
    },
    getAllEntradas: async (req, res) => { //retorna todas as entradas de estoque
        try {
            const Entradas = await Entrada_Estoque.findAll(req.body);
            res.json(Entradas);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    getEntradaByID: async (req, res) => { //retorna uma entrada específica
        try {
            const Entrada = await Entrada_Estoque.findByPk(req.params.id);
            if (!Entrada) {
                return res.status(404).send('Entrada não encontrada');
            }
            res.json(Entrada)
        } catch(error) {
            res.status(500).send(error.message);
        }
    },
    getEntradaByProdutoID: async (req, res) => { //retorna todas as entradas de um produto
        try {
            const entradasProduto = await Entrada_Estoque.findAll({
                where: {
                    id_produto: req.params.id_p 
                }
            })
            if (entradasProduto.length === 0) { //verifica se o produto possui alguma entrada
                return res.status(404).send('Entrada(s) do produto não encontrada(s)');
            }    
            res.json(entradasProduto)
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    updateEntrada: async (req, res) => {
        try {
            const entrada = await Entrada_Estoque.findByPk(req.params.id);
            if (!entrada) {
                return res.status(404).send('Entrada não encontrada')
            }
            await entrada.update(req.body)
            res.send("Entrada atualizada com Sucesso!");
        } catch(error) {
            res.status(500).send(error.message);
        }
    },
    deleteEntrada: async (req, res) => {
        try {
            const entrada = await Entrada_Estoque.findByPk(req.params.id);
            if (!entrada) {
                return res.status(404).send('Entrada não encontrada')
            }
            await entrada.destroy()
            res.send("Entrada deletado com Sucesso!")

        } catch (error) {
            res.status(500).send(error.message);
        }
    }
    
}

module.exports = EntradasController;