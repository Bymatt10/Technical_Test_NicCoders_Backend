const { DataTypes } = require('sequelize');
const Connection = require('../models/connection')


const connection = new Connection()
const Ricky = connection.sequelize.define('ricky', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    species: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    gender: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    Image: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    url: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    timestamps: false,
    tableName: 'ricky',
});

module.exports = Ricky;