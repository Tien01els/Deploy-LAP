const express = require('express');
const { accountController } = require('../controllers/index');
const {verifyToken, authRole} = require('../middleware/auth');
const role = require('../config/roleConstant');

const accountRouter = express.Router();

accountRouter.get('/', verifyToken, authRole(role.ROLE_ADMIN), accountController.getAllAccount);
accountRouter.post('/login', accountController.login);
accountRouter.post('/create-account', accountController.createAccount);
accountRouter.post('/refresh-token', accountController.requestRefreshToken);
accountRouter.delete('/logout', verifyToken, accountController.logout);

module.exports = accountRouter;