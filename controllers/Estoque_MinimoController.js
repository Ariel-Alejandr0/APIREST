const Estoque_Minimo = require('../models/Estoque_Minimo');

exports.createMinimo = async (req, res) => {
    try {
        const novoMinimo = await Estoque_Minimo.create(req.body);
        res.json(novoMinimo);
    } catch (error) {
        res.status(500).send(error.message);
    }
};