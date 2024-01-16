const Saida_Estoque = require('../models/Saida_Estoque');

exports.createSaida = async (req, res) => {
    try {
        const novaSaida = await Saida_Estoque.create(req.body);
        res.json(novaSaida);
    } catch (error) {
        res.status(500).send(error.message);
    }
};