const _ = require('lodash');
const { User } = require('./user');

function addUser(req, res) {
    var body = _.pick(req.body, ['email', 'password']);
    var user = new User(body);

    user.save()
        .then(() => {
            return user.generateAuthToken();
        }).then((token) => {
            res.header('x-auth', token).send(user);
        }).catch((e) => {
            res.status(400).send(e);
        });
}

function userLogin(req, res) {
    var body = _.pick(req.body, ['email', 'password']);

    User.findByCredentials(body.email, body.password)
        .then((user) => {
            return user.generateAuthToken().then((token) => {
                res.header('x-auth', token).send(user);
            });
        }).catch((e) => {
            res.status(400).send(e);
        });
}

function userLogout(req, res) {
    req.user.removeToken(req.token)
        .then(() => {
            res.status(200).send();
        }, () => {
            res.status(400).send();
        });
}

function userMe(req, res) {
    res.send(req.user);
}

module.exports = {
    addUser,
    userMe,
    userLogin,
    userLogout
};
