const path = require('path');
const { DataTypes, Sequelize, Model } = require('sequelize');

// TODO - create the new sequelize connection
const db = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, 'db.sqlite')
})

module.exports = {
    sequelize,
    Sequelize
};
