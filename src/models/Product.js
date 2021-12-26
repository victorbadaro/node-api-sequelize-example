const { Model, DataTypes } = require('sequelize');

class Product extends Model {
    static init(sequelize) {
        super.init({
            description: DataTypes.TEXT,
            user_id: DataTypes.INTEGER
        }, { sequelize });
    }
}

module.exports = Product;