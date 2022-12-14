const { studentTopicService } = require('../services/index');

module.exports = {
    postStudentTopic: async (req, res) => {
        try {
            let studentId = req.body.studentId;
            let topicId = req.body.topicId;
            let isUnlock = req.body.isUnlock;
            let studentTopic = {
                status: 0,
                isUnlock: isUnlock,
                isDeleted: false,
                studentId,
                topicId,
            };
            let result = await studentTopicService.createStudentTopic(studentTopic);
            return res.status(result.statusCode).send(result.data);
        } catch (error) {
            const errorStatus = error.statusCode || 500;
            console.log(error);
            return res.status(errorStatus).send(error.data);
        }
    },
    getTopicsOfStudent: async (req, res) => {
        try {
            const studentId = req.userId;
            const classId = req.params.classId;
            let result = await studentTopicService.findTopicsOfStudent(studentId, classId);
            return res.status(result.statusCode).send(result.data);
        } catch (error) {
            const errorStatus = error.statusCode || 500;
            console.log(error);
            return res.status(errorStatus).send(error.data);
        }
    },
    getPercentSkillsOfStudent: async (req, res) => {
        try {
            const studentId = req.userId;
            let result = await studentTopicService.findAllPercentSkillsOfStudent(studentId);
            return res.status(result.statusCode).send(result.data);
        } catch (error) {
            const errorStatus = error.statusCode || 500;
            console.log(error);
            return res.status(errorStatus).send(error.data);
        }
    },
};
