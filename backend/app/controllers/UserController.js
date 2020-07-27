const { User } = require('../models');

module.exports = {
    index(req, res) {
        User.findAll({})
            .then(users => res.json({
                error: false,
                data: users
            }))
    },
    create(req, res) {
        const { name, username } = req.body;
        User.create({
            name, username
        })
        .then(user => res.status(201).json({
            error: false,
            data: user
        }))
    },
    update(req, res) {
        const user_id = req.params.id;
        const { name, username } = req.body;
        User.update({
            name, username
        }, {
            where: {
                id: user_id
            }
        })
        .then(user => res.status(201).json({
            error: false,
            data: user
        }))
    },
    destroy(req, res) {
        const user_id = req.params.id;
        User.destroy({ where: {
            id: user_id
        }})
        .then(status => res.status(201).json({
            error: false
        }))
    }
}
