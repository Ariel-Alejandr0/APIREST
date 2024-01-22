const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Entrada_Estoque extends Model {}

Entrada_Estoque.init({
    id_entrada: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    id_produto: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Produtos',
            key: 'id_produto'
        },
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    data_entrada: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Entrada_Estoque',
    timestamps: false
});

module.exports = Entrada_Estoque;
