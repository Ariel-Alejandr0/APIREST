const Saida_Estoque = require('../models/Saida_Estoque');


const SaidaController = {
    createSaida: async (req, res) => { //criar uma saida de estoque
        try {
            const novaSaida = await Saida_Estoque.create(req.body);
            res.json(novaSaida);
        } catch(error) {
            res.status(500).send(error.message);
        }
    },
    getSaidas: async (req, res) => {
        try {
            const saidas = await Saida_Estoque.findAll();
            res.json(saidas);
        } catch(error) {
            res.status(500).send(error.message);
        } 
    },
    getSaidaByID: async (req, res) => {
        try {
            const saida = await Saida_Estoque.findByPk(req.params.id);
            if(!saida) {
                return req.status(404).send("Saída não encontrada!");
            }
            res.json(saida);
        } catch(error) {
            res.status(500).send(error.message)
        }
    },
    getSaidaByProdutoID: async (req, res) => {
        try {
            const saida = await Saida_Estoque.findAll({
                where: {
                    id_produto: req.params.id_p
                }
            });

            if (saida.length <= 0){
                return res.status(404).send("Entrada(s) não encontrada(s)!");
            }
            res.json(saida);
        } catch(error) {
            res.status(500).send(error.message);
        }
    }

}

module.exports = SaidaController;