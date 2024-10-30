const {Sequelize, DataType, db} = require('../db');

// TODO - define the Band model
class Band extends Sequelize {
    static {
        Band.init({
            name: DataType.STRING, 
            genre: DataType.STRING,
        },{
            sequelize: db
        })
    }
}

module.exports = {
    Band
};