const express = require('express');
const router = express.Router();
const ProdutoController = require('../controllers/Estoque_MinimoController');

// Rota para criar um novo produto
router.post('/Estoque_Minimo', ProdutoController.createProduto);

module.exports = router;
