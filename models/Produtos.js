const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Produtos extends Model {}


Produtos.init({
    id_produto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome_produto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    preco_unitario: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    estoque_minimo: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Produtos',
    timestamps: false
});

module.exports = Produtos;
