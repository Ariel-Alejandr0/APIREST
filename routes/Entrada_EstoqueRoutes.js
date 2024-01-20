const express = require('express');
const router = express.Router();
const EntradasController = require('../controllers/Entrada_EstoqueController');

// Rota para criar uma nova entrada
router.post('/entrada_estoque', EntradasController.createEntrada);

//Rota para obter todas as entradas
router.get('/entrada_estoque', EntradasController.getAllEntradas);

//Rota para obter uma entrada específica por id
router.get('/entrada_estoque/:id', EntradasController.getEntradaByID)

//Rota para obter todas as entradas de um produto específico por FK
router.get('/entrada_estoque/entrada_produto/:id_p', EntradasController.getEntradaByProdutoID)

//Rota para atualizar uma entrada
router.put('/entrada_estoque/:id', EntradasController.updateEntrada)

//Rota para deletar uma entrada
router.delete('/entrada_estoque/:id', EntradasController.deleteEntrada)

module.exports = router;


