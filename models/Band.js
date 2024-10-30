const {Sequelize, DataTypes, db} = require('../db');

// TODO - define the Band model
class Band extends Sequelize {
    static {
        Band.init({
            name: DataTypes.STRING, 
            genre: DataTypes.STRING,
        },{
            sequelize: db
        })
    }
}

module.exports = {
    Band
};