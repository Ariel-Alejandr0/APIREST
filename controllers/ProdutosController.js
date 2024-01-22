const Produto = require('../models/Produtos');
const Entrada_Estoque = require('../models/Entrada_Estoque');
const Saida_Estoque = require('../models/Saida_Estoque');

const deleteAllSaidas = async (id_produto) => { //função para evitar que existam resgistros orfãos nas Saídas
    return await Saida_Estoque.destroy({
        where: {
            id_produto: id_produto
        }
    })
}
const deleteAllEntradas = async (id_produto) => { //função para evitar que existam resgistros orfãos nas Entrdas
    return await Entrada_Estoque.destroy({
        where: {
            id_produto: id_produto
        }
    });
}


const ProdutoController = {
    createProduto: async (req, res) => { // Cria um produto
        try {
            const novoProduto = await Produto.create(req.body);
            res.json(novoProduto);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getAllProdutos: async (req, res) => { // Obtem todos os produtos
        try {
            const produtos = await Produto.findAll();
            res.json(produtos);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getProdutoById: async (req, res) => { // obtem um produto por id
        try {
            const produto = await Produto.findByPk(req.params.id);
            if (!produto) {
                return res.status(404).send('Produto não encontrado');
            }
            res.json(produto);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    updateProduto: async (req, res) => { // Atualiza um produto
        try {
            const produto = await Produto.findByPk(req.params.id);
            if (!produto) {
                return res.status(404).send('Produto não encontrado');
            }
            await produto.update(req.body);
            res.send('Produto atualizado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    deleteProduto: async (req, res) => { //Deleta um  produto
        try {
            const id_produto= req.params.id;
            const produto = await Produto.findByPk(id_produto);
            
            if (!produto) {
                return res.status(404).send('Produto não encontrado');
            }
            deleteAllSaidas(id_produto);
            deleteAllEntradas(id_produto);
            await produto.destroy();
            res.send('Produto deletado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
};

module.exports = ProdutoController;