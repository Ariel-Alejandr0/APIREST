const express = require('express');
const router = express.Router();
const ProdutoController = require('../controllers/Entrada_EstoqueController');

// Rota para criar um novo produto
router.post('/Entrada_Estoque', ProdutoController.createProduto);

module.exports = router;
