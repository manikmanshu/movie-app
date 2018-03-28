const _ = require('lodash');
const { User } = require('../models/user');
const userManager = require('../manager/user.manager');

var { authenticate } = require('../../common/authenticate');
module.exports = function (app) {
    app.post('/api/users', (req, res) => {
        var body = _.pick(req.body, ['email', 'password']);
        var user = new User(body);

        user.save()
            .then(() => {
                return user.generateAuthToken();
            }).then((token) => {
                res.header('x-auth', token).send(user);
            }).catch((e) => {
                res.status(400).send(e);
            })
    });

    app.get('/api/users/me', authenticate, (req, res) => {
        res.send(req.user);
    });

    app.post('/users/login', (req, res) => {
        var body = _.pick(req.body, ['email', 'password']);

        User.findByCredentials(body.email, body.password)
            .then((user) => {
                return user.generateAuthToken().then((token) => {
                    res.header('x-auth', token).send(user);
                });
            }).catch((e) => {
                res.status(400).send();
            });
    });

    app.delete('/users/me/token', authenticate, (req, res) => {
        req.user.removeToken(req.token)
        .then(() => {
            res.status(200).send();
        }, () => {
            res.status(400).send();
        });
    });
};

