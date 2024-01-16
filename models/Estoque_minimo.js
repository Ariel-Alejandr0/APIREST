const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Estoque_Minimo extends Model {}

Estoque_Minimo.init({
    id_estoque_minimo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_produto: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Produtos',
            key: 'id_produto'
        }
    },
    estoque_minimo: {
        type: DataTypes.INTEGER
    }
}, {
    sequelize,
    modelName: 'Estoque_Minimo',
    timestamps: false
});

module.exports = EntradaEstoque;