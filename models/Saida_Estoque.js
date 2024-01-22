const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Saida_Estoque extends Model {}

Saida_Estoque.init({
    id_saida: {
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
    data_saida: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Saidas_Estoque',
    timestamps: false,
    freezeTableName: true // impede o nome da tabela de ficar no plural
});

module.exports = Saida_Estoque;