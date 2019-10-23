const models = require('../models');

module.exports = {
    get: {
        create: function (req, res) {
            res.render('create')
        },
        edit: function (req, res) {
            const id = req.params.id;
            const user = req.user;
            //exampleModel.findOne i tn....
        }
    },
    post: {
        create: function (req, res) {
            const { name = null, description = null, imageUrl = null } = req.body;
            const { user } = req;

            models.cubeModel.create({ name, description, imageUrl }).then((cube) => {
                res.redirect('/');
            });
        },
        edit: function (req, res) {
            const id = req.params.id;
            const { name = null, description = null, imageUrl = null } = req.body;
            
            models.cubeModel.updateOne({_id: id}, { name, description, imageUrl, difficultyLevel, creatorId: user._id }, {runValidators: true}).then((cube) => {
                res.redirect('/');
            })
        }
    }
}