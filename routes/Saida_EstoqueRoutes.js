const express = require('express');
const router = express.Router();
const ProdutoController = require('../controllers/Saida_EstoqueController');

// Rota para criar um novo produto
router.post('/Saida_Estoque', ProdutoController.createProduto);

module.exports = router;
