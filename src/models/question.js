'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Question extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Question.hasMany(models.Skill_Question, {
                foreignKey: 'questionId',
                as: 'skillQuestion',
            });
            Question.hasMany(models.Assignment_Question, {
                foreignKey: 'questionId',
                as: 'assignmentQuestion',
            });
            Question.hasMany(models.Student_Question, {
                foreignKey: 'questionId',
                as: 'studentQuestion',
            });
            Question.hasMany(models.Teacher_Question, {
                foreignKey: 'questionId',
                as: 'teacherQuestion',
            });

            Question.belongsTo(models.Questiontype, {
                foreignKey: 'questionTypeId',
                as: 'questiontype',
            });
            Question.belongsTo(models.Teacher, {
                foreignKey: 'teacherId',
                as: 'teacher',
            });
        }
    }
    Question.init(
        {
            content: DataTypes.TEXT,
            image: DataTypes.STRING,
            option: DataTypes.TEXT,
            level: DataTypes.STRING,
            hint: DataTypes.STRING,
            score: DataTypes.REAL,
            isDeleted: DataTypes.BOOLEAN,
            questionTypeId: DataTypes.INTEGER,
            teacherId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'Question',
        }
    );
    return Question;
};
