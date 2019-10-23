// Require controllers
const { homeController, userController } = require('../controllers');
const { auth } = require('../utils');
const { body } = require('express-validator');


module.exports = (app) => {
    app.get('/login', auth(false), userController.get.login);
    app.post('/login', auth(false), userController.post.login);

    app.get('/register', auth(false), userController.get.register);
    app.post('/register', auth(false), body('repeatPassword').custom((value, { req }) => {
        if (value !== req.body.password) {
            //throw new Error('Passwords don\'t match!');
            return false;
        }
        return true;
    }), userController.post.register);

    app.get('/logout', auth(), userController.get.logout);

    app.get('/', auth(false), homeController.get.home);
};
