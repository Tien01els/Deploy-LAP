'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Parent extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Parent.hasMany(models.Student, { foreignKey: 'parentId', as: 'student' });

            Parent.belongsTo(models.Account, { foreignKey: 'accountId', as: 'account' });
        }
    }
    Parent.init(
        {
            fullName: DataTypes.STRING,
            isDeleted: DataTypes.BOOLEAN,
            accountId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'Parent',
        }
    );
    return Parent;
};
