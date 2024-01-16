const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Saida_Estoque extends Model {}

Saida_Estoque.init({
    id_saida: {
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
    quantidade: {
        type: DataTypes.INTEGER
    },
    data_saida: {
        type: DataTypes.DATE
    }
}, {
    sequelize,
    modelName: 'Saida_Estoque',
    timestamps: false
});

module.exports = Saida_Estoque;