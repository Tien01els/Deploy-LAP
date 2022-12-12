const { standardService } = require('../services/index');

module.exports = {
    getAllStandards: async (req, res) => {
        try {
            const result = await standardService.findAllStandards();
            return res.status(result.statusCode).send(result.data);
        } catch (error) {
            const errorStatus = error.statusCode || 500;
            console.log(error);
            return res.status(errorStatus).send(error.data);
        }
    },
    postStandard: async (req, res) => {
        try {
            const standard = {
                standardName: req.body.standardName,
                standardCode: req.body.standardCode,
                isDeleted: false,
            };
            const result = await standardService.createStandard(standard);
            return res.status(result.statusCode).send(result.data);
        } catch (error) {
            const errorStatus = error.statusCode || 500;
            console.log(error);
            return res.status(errorStatus).send(error.data);
        }
    },
    deleteStandard: async (req, res) => {
        try {
            const id = req.params.id;
            let result = await standardService.deleteStandard(id);
            return res.status(result.statusCode).send(result.data);
        } catch (error) {
            const errorStatus = error.statusCode || 500;
            console.log(error);
            return res.status(errorStatus).send(error.data);
        }
    },
};
