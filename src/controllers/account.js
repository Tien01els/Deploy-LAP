const { accountService } = require('../services/index');

module.exports = {
    createAccount: async (req, res) => {
        try {
            const account = {
                email: req.body.email,
                password: req.body.password,
                roleId: req.body.roleId && parseInt(req.body.roleId),
            };
            const result = await accountService.createAccount(account);
            return res.status(result.statusCode).send(result.data);
        } catch (error) {
            const errorStatus = error.statusCode || 500;
            console.log(error);
            return res.status(errorStatus).send(error.data);
        }
    },
    login: async (req, res) => {
        try {
            const result = await accountService.loginAccount(req.body.email, req.body.password);
            if (typeof result.data === 'string')
                return res.status(result.statusCode).json({
                    success: false,
                    message: result.data,
                });
            const tokens = result.data;
            return res.status(result.statusCode).json({
                success: true,
                message: 'Login success',
                data: tokens,
                // { ...user, roleId: account.roleId },
            });
            // .cookie('accessToken', tokens.accessToken, {
            //     expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
            //     httpOnly: true,
            //     // secure: false,
            //     // path: '/',
            //     // sameSite: 'strict',
            // })
            // .cookie('refreshToken', tokens.refreshToken, {
            //     expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
            //     httpOnly: true,
            //     // secure: false,
            //     // path: '/',
            //     // sameSite: 'strict',
            // })
        } catch (error) {
            const errorStatus = error.statusCode || 500;
            console.log(error);
            return res.status(errorStatus).send(error.data);
        }
    },
    logout: async (req, res) => {
        try {
            const result = await accountService.logoutAccount(req.accountId);
            // res.clearCookie('accessToken');
            // res.clearCookie('refreshToken');
            return res.status(result.statusCode).json({
                success: true,
                message: result.data,
            });
        } catch (error) {
            const errorStatus = error.statusCode || 500;
            console.log(error);
            return res.status(errorStatus).send(error.data);
        }
    },

    requestRefreshToken: async (req, res) => {
        try {
            const token = req.headers.authorization;
            if (token) {
                const refreshToken = token.split(' ')[1];
                const result = await accountService.refreshTokenForAccount(refreshToken);
                const tokens = result.data;
                return res.status(result.statusCode).json(tokens);
            }
            return res.status(401).json({ success: false, message: "You're not authenticated" });
        } catch (error) {
            const errorStatus = error.statusCode || 500;
            console.log(error);
            return res.status(errorStatus).send(error.data);
        }
    },

    getAllAccount: async (req, res) => {
        try {
            const result = await accountService.findAllAccount();
            return res.status(result.statusCode).send({
                success: true,
                message: 'Account',
                data: result.data,
            });
        } catch (error) {
            const errorStatus = error.statusCode || 500;
            console.log(error);
            return res.status(errorStatus).send(error.data);
        }
    },

    getProfile: async (req, res) => {
        try {
            const userId = req.userId;
            const roleId = req.roleId;
            const result = await accountService.findProfile(userId, roleId);
            return res.status(result.statusCode).send(result.data);
        } catch (error) {
            const errorStatus = error.statusCode || 500;
            console.log(error);
            return res.status(errorStatus).send(error.data);
        }
    },

    editProfile: async (req, res) => {
        try {
            const userId = req.userId;
            const roleId = req.roleId;
            const profile = {
                avatarImg: req.body.avatarImg,
                fullName: req.body.fullName,
                dateOfBirth: req.body.dateOfBirth,
                gender: req.body.gender,
            };
            const result = await accountService.updateProfile(userId, roleId, profile);
            return res.status(result.statusCode).send(result.data);
        } catch (error) {
            const errorStatus = error.statusCode || 500;
            console.log(error);
            return res.status(errorStatus).send(error.data);
        }
    },

    changeActiveAccount: async (req, res) => {
        try {
            const result = await accountService.changeActiveAccount(req.params.id);
            return res.status(result.statusCode).send({
                success: true,
                message: 'Account',
                data: result.data,
            });
        } catch (error) {
            const errorStatus = error.statusCode || 500;
            console.log(error);
            return res.status(errorStatus).send(error.data);
        }
    },

    deleteAccount: async (req, res) => {
        try {
            const result = await accountService.deleteAccount(req.params.id);
            return res.status(result.statusCode).send({
                success: true,
                message: 'Account',
                data: result.data,
            });
        } catch (error) {
            const errorStatus = error.statusCode || 500;
            console.log(error);
            return res.status(errorStatus).send(error.data);
        }
    },
};
