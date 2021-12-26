const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.TEXT,
            email: DataTypes.TEXT
        }, { sequelize });
    }
}

module.exports = User;