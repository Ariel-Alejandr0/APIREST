const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Produtos extends Model {}


Produtos.init({
    id_produto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome_produto: {
        type: DataTypes.STRING
    },
    descricao: {
        type: DataTypes.TEXT
    },
    preco_unitario: {
        type: DataTypes.DECIMAL
    }
}, {
    sequelize,
    modelName: 'Produtos',
    timestamps: false
});

module.exports = Produtos;
