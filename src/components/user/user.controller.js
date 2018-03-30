const _ = require('lodash');
const { User } = require('./user');
const logger = require('../../common/logger');

// Add a user
function addUser(req, res) {
    logger.info('Add a user');
    const body = _.pick(req.body, ['email', 'password']);
    const user = new User(body);
    
    user.save()
        .then(() => {
            return user.generateAuthToken();
        }).then((token) => {
            res.header('x-auth', token).send(user);
        }).catch((e) => {
            logger.error('Error in adding user');
            res.status(400).send(e);
        });
}

// User login
function userLogin(req, res) {
    logger.info('User login');
    const body = _.pick(req.body, ['email', 'password']);

    User.findByCredentials(body.email, body.password)
        .then((user) => {
            return user.generateAuthToken().then((token) => {
                res.header('x-auth', token).send(user);
            });
        }).catch((e) => {
            logger.error('Error in user login');
            res.status(400).send(e);
        });
}

// User logout
function userLogout(req, res) {
    logger.info('User logout');
    req.user.removeToken(req.token)
        .then(() => {
            res.status(200).send();
        }, () => {
            logger.error('Error in user logout');
            res.status(400).send();
        });
}

// Validate User authentication
function userMe(req, res) {
    logger.info('/users/me/token');
    res.send(req.user);
}

module.exports = {
    addUser,
    userMe,
    userLogin,
    userLogout
};
