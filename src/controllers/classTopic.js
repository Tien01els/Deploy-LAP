const { classTopicService, studentService, studentTopicService } = require('../services/index');

module.exports = {
    getTopicsOfTeacherByClass: async (req, res) => {
        try {
            let teacherId = req.userId;
            let classId = req.params.classId;
            let result = await classTopicService.findTopicsOfTeacherByClass(teacherId, classId);
            return res.status(result.statusCode).send(result.data);
        } catch (error) {
            const errorStatus = error.statusCode || 500;
            console.log(error);
            return res.status(errorStatus).send(error.data);
        }
    },

    getTopicsOfClassForStudent: async (req, res) => {
        try {
            let classId = req.params.classId;
            let result = await classTopicService.findTopicsOfClassForStudent(classId);
            return res.status(result.statusCode).send(result.data);
        } catch (error) {
            const errorStatus = error.statusCode || 500;
            console.log(error);
            return res.status(errorStatus).send(error.data);
        }
    },

    postClassTopic: async (req, res) => {
        try {
            let classId = req.body.classId;
            let topicId = req.body.topicId;
            const isUnlock = req.body.isUnlock || 0;
            let classTopic = {
                averageScore: 0,
                isDeleted: false,
                classId,
                topicId,
                isUnlock,
            };
            let result = await classTopicService.createClassTopic(classTopic, isUnlock);
            return res.status(result.statusCode).send(result.data);
        } catch (error) {
            const errorStatus = error.statusCode || 500;
            console.log(error);
            return res.status(errorStatus).send(error.data);
        }
    },

    deleteClassTopic: async (req, res) => {
        try {
            let id = req.params.id;
            let result = await classTopicService.deleteClassTopic(id);
            return res.status(200).send(result.data);
        } catch (error) {
            const errorStatus = error.statusCode || 500;
            console.log(error);
            return res.status(errorStatus).send(error.data);
        }
    },
};
