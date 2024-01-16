const Entrada_Estoque = require('../models/Entrada_Estoque');

exports.createEntrada = async (req, res) => {
    try {
        const novaEntrada = await Entrada_Estoque.create(req.body);
        res.json(novaEntrada);
    } catch (error) {
        res.status(500).send(error.message);
    }
};