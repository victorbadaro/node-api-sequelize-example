import { Model, DataTypes } from 'sequelize';

class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.TEXT,
            email: DataTypes.TEXT
        }, { sequelize });
    }
}

export default User;