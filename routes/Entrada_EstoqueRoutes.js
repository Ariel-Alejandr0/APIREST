const express = require('express');
const router = express.Router();
const EntradasController = require('../controllers/Entrada_EstoqueController');

// Rota para criar um novo produto
router.post('/entrada_estoque', EntradasController.createEntrada);

//Rota para obter todos os produtos
router.get('/entrada_estoque', EntradasController.getAllEntradas);

//Rota para obter todos um produto de um id específico
router.get('/entrada_estoque/:id', EntradasController.getEntradaByID)
module.exports = router;
