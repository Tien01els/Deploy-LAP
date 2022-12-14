'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('topics', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            topicName: {
                type: Sequelize.STRING,
            },
            topicImg: {
                type: Sequelize.TEXT,
            },
            description: {
                type: Sequelize.TEXT,
            },
            isUnlock: {
                type: Sequelize.BOOLEAN,
            },
            isDeleted: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
            },
            teacherId: {
                type: Sequelize.INTEGER,
            },
            gradeId: {
                type: Sequelize.INTEGER,
            },
            prerequisiteTopicId: {
                type: Sequelize.INTEGER,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('topics');
    },
};
