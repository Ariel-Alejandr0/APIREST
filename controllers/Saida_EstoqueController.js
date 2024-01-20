const Saida_Estoque = require('../models/Saida_Estoque');


const SaidaController = {
    createSaida: async (req, res) => { //criar uma saida de estoque
        try {
            const novaSaida = await Saida_Estoque.create(req.body);
            res.json(novaSaida);
        } catch(error) {
            res.status(500).send(error.message);
        }
    }
}

module.exports = SaidaController;