module.exports = {
    get: {
        home(req, res, next) {
            const user = req.user;
            console.log(user);
            res.render('index.hbs', { user });
        }
    }
}