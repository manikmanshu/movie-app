const userController = require('./user.controller');
var { authenticate } = require('../../common/authenticate');

module.exports = function (app) {
    app.post('/api/users', userController.addUser);
    app.get('/api/users/me', authenticate, userController.userMe);
    app.post('/users/login', userController.userLogin);
    app.delete('/users/me/token', authenticate, userController.userLogout);
};
