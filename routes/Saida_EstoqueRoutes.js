const express = require('express');
const router = express.Router();
const SaidaController = require('../controllers/Saida_EstoqueController');

// Rota para criar uma nova saída de estoque
router.post('/saida_estoque', SaidaController.createSaida);

//Rota para obter todas as saídas
router.get('/saida_estoque', SaidaController.getSaidas);

//Rota para obter saída por ID
router.get('/saida_estoque/:id', SaidaController.getSaidaByID);

//Rota para obter as saídas de um determinado produto
router.get('/saida_estoque/saida_produto/:id_p', SaidaController.getSaidaByProdutoID);

//Rota para atualizar uma saida
router.put('/saida_estoque/:id', SaidaController.updateSaida);

//Rota para excluir uma saída
router.delete('/saida_estoque/:id', SaidaController.deleteSaida)

module.exports = router;
