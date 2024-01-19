const express = require('express');
const router = express.Router();
const EntradasController = require('../controllers/Entrada_EstoqueController');

// Rota para criar um novo produto
router.post('/entrada_estoque', EntradasController.createEntrada);

//Rota para obter todos os produtos
router.get('/entrada_estoque', EntradasController.getAllEntradas);

module.exports = router;
