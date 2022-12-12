const db = require('../models/index');
const { respMapper, errorResp } = require('../helper/helper');

module.exports = {
    findAllStandards: async () => {
        try {
            let standards = await db.Standard.findAll({
                where: { isDeleted: 0 },
                attributes: {
                    exclude: ['isDeleted', 'createdAt', 'updatedAt'],
                },
                raw: true,
            });
            return respMapper(200, standards);
        } catch (error) {
            if (error.stack) {
                console.log(error.message);
                console.log(error.stack);
            }
            throw errorResp(400, error.message);
        }
    },
    createStandard: async (standard) => {
        try {
            await db.Standard.create(standard);
            return respMapper(201, 'Standard created successfully');
        } catch (error) {
            if (error.stack) {
                console.log(error.message);
                console.log(error.stack);
            }
            throw errorResp(400, error.message);
        }
    },
    deleteStandard: async (id) => {
        try {
            await db.Standard.update({ isDeleted: true }, { where: { id, isDeleted: false } });
            return respMapper(201, 'Standard deleted successfully');
        } catch (error) {
            if (error.stack) {
                console.log(error.message);
                console.log(error.stack);
            }
            throw errorResp(400, error.message);
        }
    },
};
