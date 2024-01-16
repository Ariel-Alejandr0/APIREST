const Produtos = require('../models/Produtos');

exports.createProduto = async (req, res) => {
    try {
        const novoProduto = await Produtos.create(req.body);
        res.json(novoProduto);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
