const express = require('express');
const router = express.Router();
const SaidaController = require('../controllers/Saida_EstoqueController');

// Rota para criar uma nova saída de estoque
router.post('/saida_Estoque', SaidaController.createSaida);

module.exports = router;
