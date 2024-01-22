const Entrada_Estoque = require('../models/Entrada_Estoque');
const Saida_Estoque = require('../models/Saida_Estoque');
const { Op } = require('sequelize')

const SaidaController = {
    createSaida: async (req, res) => { //criar uma saida de estoque
        try {
            const id_produto = req.body.id_produto
            const saldoAtual = await SaidaController.calculaEstoque(id_produto) - req.body.quantidade
            
            if (saldoAtual >= 0){ // impede que a saida seja maior o que a quantiade no estoque
                const novaSaida = await Saida_Estoque.create(req.body);
                res.json(novaSaida);
            } else {
                res.send(`Não foi possível completar a operação, Saldo atual do produto: ${saldoAtual}`)
            }
            
        } catch(error) {
            res.status(500).send(error.message);
        }
    },
    getSaidas: async (req, res) => { // obtem todas as saídas
        try {
            const saidas = await Saida_Estoque.findAll();
            res.json(saidas);
        } catch(error) {
            res.status(500).send(error.message);
        } 
    },
    getSaidaByID: async (req, res) => { // obtem uma saida específica por id
        try {
            const saida = await Saida_Estoque.findByPk(req.params.id);
            if(!saida) {
                return req.status(404).send("Saída não encontrada!");
            }
            res.json(saida);
        } catch(error) {
            res.status(500).send(error.message)
        }
    },
    getSaidaByProdutoID: async (req, res) => { // Obtem todas as saídas de um produto
        try {
            const saida = await Saida_Estoque.findAll({
                where: {
                    id_produto: req.params.id_p
                }
            });

            if (saida.length <= 0){
                return res.status(404).send("Saídas(s) não encontrada(s)!");
            }
            res.json(saida);
        } catch(error) {
            res.status(500).send(error.message);
        }
    },
    updateSaida: async (req, res) => { //atualiza uma saída de um id específico
        try {
            const saida = await Saida_Estoque.findByPk(req.params.id);

            if(!saida){
                return res.status(404).send("Saída não encontrada!");
            }
            await saida.update(req.body)
            res.send("Saída atualizada com sucesso!");

        } catch(error) {
            res.status(500).send(error.message)
        }
    },
    deleteSaida: async (req, res) => { // deleta uma saída por id específico
        try {
            const saida = await Saida_Estoque.findByPk(req.params.id);

            if(!saida){
                res.status(404).send("Saída não encontrada");
            }
            await saida.destroy()
            res.send("Saída excluída com sucesso!")

        } catch(error){
            res.status(500).send(error.message);
        }
    },
    calculaEstoque: async (id_produto) => { // veirifica o saldo atual do produto
        const totalEntradas = await Entrada_Estoque.sum('quantidade', {
            where: {
                id_produto: {
                    [Op.eq]: id_produto
                }
            }
        });
        const totalSaidas = await Saida_Estoque.sum('quantidade', {
            where: {
                id_produto: {
                    [Op.eq]: id_produto
                }
            }
        });
        return totalEntradas - totalSaidas;
    }
}

module.exports = SaidaController;