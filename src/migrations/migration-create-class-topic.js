'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('class_topics', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            averageScore: {
                type: Sequelize.REAL,
            },
            isUnlock: {
                type: Sequelize.BOOLEAN,
            },
            isDeleted: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
            },
            classId: {
                type: Sequelize.INTEGER,
            },
            topicId: {
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
        await queryInterface.dropTable('class_topics');
    },
};
