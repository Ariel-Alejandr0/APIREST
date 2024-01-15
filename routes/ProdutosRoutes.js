const express = require('express');
const router = express.Router();
const ProdutoController = require('../controllers/ProdutosController');

// Rota para criar um novo produto
router.post('/Produtos', ProdutoController.createProduto);

module.exports = router;
