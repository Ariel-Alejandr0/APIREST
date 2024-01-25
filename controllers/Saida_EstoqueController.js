const Entrada_Estoque = require('../models/Entrada_Estoque');
const Saida_Estoque = require('../models/Saida_Estoque');
const { Op } = require('sequelize')

const SaidaController = {
    createSaida: async (req, res) => { //criar uma saida de estoque
        try {
            const requesicao = req.body
            
            const resultados = await Promise.all(requesicao.map(async registro => { //espera todas as funçoes assincornas no loop para depois continuar
                const id_produto = registro.id_produto;
                const saldoAtual = await SaidaController.calculaEstoque(id_produto);
                
                if (saldoAtual >= registro.quantidade){ // impede que a saida seja maior o que a quantiade no estoque
                    const novaSaida = await Saida_Estoque.create(registro);
                    return novaSaida;
                } else {
                    throw new Error(`Não foi possível completar a operação ${registro.id_saida}, Saldo atual do produto ${id_produto}: ${saldoAtual}`);
                } 
            }));
            
            res.json(resultados);

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
        let totalEntradas = await Entrada_Estoque.sum('quantidade', { //calcula o total de entradas
            where: {
                id_produto: {
                    [Op.eq]: id_produto
                }
            }
        });
        let totalSaidas = await Saida_Estoque.sum('quantidade', {//calcula o total de saidas
            where: {
                id_produto: {
                    [Op.eq]: id_produto
                }
            }
        });
        if(totalEntradas === null) {
            totalEntradas = 0;
        }
        if(totalSaidas === null) {
            totalSaidas = 0;
        }

        return totalEntradas - totalSaidas;
    }
}

module.exports = SaidaController;