'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Class_Assignment extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Class_Assignment.belongsTo(models.Class, {
                foreignKey: 'classId',
                as: 'class',
            });
            Class_Assignment.belongsTo(models.Assignment, {
                foreignKey: 'assignmentId',
                as: 'assignment',
            });
        }
    }
    Class_Assignment.init(
        {
            dateOpen: DataTypes.DATE,
            dateDue: DataTypes.DATE,
            doTime: DataTypes.INTEGER,
            isDeleted: DataTypes.BOOLEAN,
            classId: DataTypes.INTEGER,
            assignmentId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'Class_Assignment',
        }
    );
    return Class_Assignment;
};
