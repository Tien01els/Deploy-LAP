const db = require('../models/index');
const { assignmentService } = require('../services/index');

const getUserInfo = async (accountId, roleId) => {
    if (roleId === 1)
        return await db.Admin.findOne({
            where: { accountId, isDeleted: 0 },
            attributes: {
                exclude: ['isDeleted', 'createdAt', 'updatedAt'],
            },
            raw: true,
        });
    if (roleId === 2)
        return await db.Teacher.findOne({
            where: { accountId, isDeleted: 0 },
            attributes: {
                exclude: ['isDeleted', 'createdAt', 'updatedAt'],
            },
            raw: true,
        });
    if (roleId === 3)
        return await db.Student.findOne({
            where: { accountId, isDeleted: 0 },
            attributes: {
                exclude: ['isDeleted', 'createdAt', 'updatedAt'],
            },
            raw: true,
        });
    if (roleId === 4)
        return await db.Parent.findOne({
            where: { accountId, isDeleted: 0 },
            attributes: {
                exclude: ['isDeleted', 'createdAt', 'updatedAt'],
            },
            raw: true,
        });
};

module.exports = {
    connection: (socket) => {
        socket.on('rooms', (data) => {
            for (let i = 0; i < data.length; i++) {
                socket.join(data[i]);
            }
            // _io.to('1').emit('send-msg', 'Chao ban');
        });

        socket.on('send-handle-request-notification', async (data) => {
            try {
                const {
                    senderId,
                    receiverId,
                    notificationContentId,
                    tableHandle,
                    idTableHandle,
                    answer,
                } = data;

                let notificationContent;
                const notificationRoom = await db.Notification_Room.findOne({
                    where: {
                        senderAccountId: senderId,
                        receiverAccountId: receiverId,
                        isDeleted: false,
                    },
                });
                if (tableHandle === 'Student_Topic') {
                    const studentTopic = await db.Student_Topic.findByPk(idTableHandle, {
                        where: { isDeleted: 0 },
                        attributes: {
                            exclude: ['isDeleted', 'createdAt', 'updatedAt'],
                        },
                    });
                    studentTopic.isUnlock = answer;
                    studentTopic.notificationContentId = answer
                        ? studentTopic.notificationContentId
                        : null;
                    studentTopic.status = 0;

                    if (answer) {
                        const listSkillOfTopic = await db.Skill.findAll({
                            where: { topicId: studentTopic.topicId, isDeleted: 0 },
                        });

                        const skillOfStudent = new Array();
                        for (let i = 0; i < listSkillOfTopic.length; ++i) {
                            skillOfStudent.push({
                                studentId: studentTopic.studentId,
                                skillId: listSkillOfTopic[i].id,
                                status: 0,
                                isPass: false,
                                isDeleted: false,
                            });
                        }
                        if (skillOfStudent) {
                            await db.Student_Skill.bulkCreate(skillOfStudent);

                            let listAssignmentOfSkill = new Array();
                            for (let i = 0; i < listSkillOfTopic.length; ++i) {
                                const assignmentOfSkill = await db.Skill_Assignment.findAll({
                                    where: { skillId: listSkillOfTopic[i].id, isDeleted: 0 },
                                    include: [
                                        {
                                            model: db.Assignment,
                                            as: 'assignment',
                                            where: { isDeleted: 0 },
                                        },
                                    ],
                                });
                                listAssignmentOfSkill = [
                                    ...listAssignmentOfSkill,
                                    ...assignmentOfSkill,
                                ];
                            }

                            const assignmentOfStudent = new Array();
                            for (let i = 0; i < listAssignmentOfSkill.length; ++i) {
                                assignmentOfStudent.push({
                                    studentId: studentTopic.studentId,
                                    assignmentId: listAssignmentOfSkill[i].assignmentId,
                                    status: 0,
                                    dateDue: listAssignmentOfSkill[i].assignment.dateDue,
                                    redo: listAssignmentOfSkill[i].assignment.redo,
                                    isRedo: false,
                                    isDeleted: false,
                                });
                            }
                            assignmentOfStudent.length &&
                                (await db.Student_Assignment.bulkCreate(assignmentOfStudent));
                        }
                    }
                    await studentTopic.save();
                    const topic = await db.Topic.findByPk(studentTopic.topicId, {
                        where: { isDeleted: 0 },
                        attributes: {
                            exclude: ['isDeleted', 'createdAt', 'updatedAt'],
                        },
                        raw: true,
                    });
                    await db.Notification_Content.update(
                        { isAnswered: true },
                        { where: { id: notificationContentId } }
                    );
                    notificationContent = await db.Notification_Content.create({
                        senderAccountId: senderId,
                        receiverAccountId: receiverId,
                        notificationRoomId: notificationRoom.id,
                        content: `Topic ${topic.topicName} unlock request ${
                            answer ? 'accepted' : 'denied'
                        }`,
                        requestUrl: `topic/${topic.id}`,
                        typeNotification: `Unlock`,
                        dateRequest: new Date(),
                        tableHandle,
                        idTableHandle,
                        isSeen: false,
                        isAnswered: false,
                        isDeleted: false,
                    });
                }
                socket.to(notificationRoom.room).emit('get-handle-request-notification', {
                    ...notificationContent.dataValues,
                    senderId,
                });
            } catch (error) {
                console.log(error.message);
            }
        });

        socket.on('send-request-unlock-topic', async (data) => {
            try {
                const { senderId, userId, topicId, tableHandle, idTableHandle } = data;
                const student = await db.Student.findByPk(userId, {
                    where: { isDeleted: 0 },
                    attributes: {
                        exclude: ['isDeleted', 'createdAt', 'updatedAt'],
                    },
                    raw: true,
                });
                const topic = await db.Topic.findByPk(topicId, {
                    where: { isDeleted: 0 },
                    attributes: {
                        exclude: ['isDeleted', 'createdAt', 'updatedAt'],
                    },
                    raw: true,
                });
                const teacher = await db.Teacher.findByPk(topic.teacherId, {
                    where: { isDeleted: 0 },
                    attributes: {
                        exclude: ['isDeleted', 'createdAt', 'updatedAt'],
                    },
                    raw: true,
                });
                const notificationRoom = await db.Notification_Room.findOne({
                    where: {
                        senderAccountId: senderId,
                        receiverAccountId: teacher.accountId,
                        isDeleted: 0,
                    },
                    attributes: {
                        exclude: ['isDeleted', 'createdAt', 'updatedAt'],
                    },
                    raw: true,
                });
                const notificationContent = await db.Notification_Content.create({
                    senderAccountId: senderId,
                    receiverAccountId: teacher.accountId,
                    notificationRoomId: notificationRoom.id,
                    content: `${student.fullName} sent a request to unlock topic ${topic.topicName}`,
                    requestUrl: `student/${student.id}`,
                    typeNotification: `Unlock`,
                    dateRequest: new Date(),
                    tableHandle: tableHandle,
                    idTableHandle: idTableHandle,
                    isSeen: false,
                    isAnswered: false,
                    isDeleted: false,
                });
                await db.Student_Topic.update(
                    {
                        notificationContentId: notificationContent.id,
                        dateRequest: new Date(),
                    },
                    {
                        where: {
                            studentId: userId,
                            topicId: topicId,
                            isDeleted: false,
                        },
                    }
                );
                socket.to(notificationRoom.room).emit('get-request-unlock-topic', {
                    ...notificationContent.dataValues,
                    senderId,
                });
            } catch (error) {
                console.log(error.message);
            }
        });
    },
};
