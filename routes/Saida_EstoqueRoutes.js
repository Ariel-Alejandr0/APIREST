const express = require('express');
const router = express.Router();
const SaidaController = require('../controllers/Saida_EstoqueController');

// Rota para criar uma nova saída de estoque
router.post('/saida_estoque', SaidaController.createSaida);

//Rota para obter todas as saídas
router.get('/saida_estoque', SaidaController.getSaidas);

//Rota para obter saída por ID
router.get('/saida_estoque/:id', SaidaController.getSaidaByID);

module.exports = router;
