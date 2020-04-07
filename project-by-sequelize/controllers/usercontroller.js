var models = require('../models/sequelize');
module.exports = {
    async createUser(req, res) {
        try {
            var result = await models.User.create({ ...req.body })
            res.json(result);
        } catch (err) {
            console.log(err)
            if (err.name === "SequelizeValidationError")
                return res.status(400).send(`Validation Error: ${err.message}`)
        }
    },

    async deleteUser(req, res) {
        try {
            await models.User.destroy({ where: { id: req.params.id } })
            res.json({ message: "User deleted" })
        } catch (err) {
            console.log(err)
            if (err.name === "SequelizeValidationError")
                return res.status(400).send(`Validation Error: ${err.message}`)
        }
    },
    async updateUser(req, res) {
        try {
            await models.User.update({ ...req.body }, { where: { id: req.params.id }, individualHooks: true })
            res.json({ message: "User updated" })
        } catch (err) {
            console.log(err)
            if (err.name === "SequelizeValidationError")
                return res.status(400).send(`Validation Error: ${err.message}`)
        }
    },
    async getAllUser(req, res) {
        try {
            var results = await models.User.findAll();
            res.json(results);

        } catch (err) {
            console.log(err)
            if (err.name === "SequelizeValidationError")
                return res.status(400).send(`Validation Error: ${err.message}`)
        }
    },
    async getUser(req, res) {
        try {
            var result = await models.User.findOne({ where: { id: req.params.id } });
            res.json(result);
        } catch (err) {
            console.log(err)
            if (err.name === "SequelizeValidationError")
                return res.status(400).send(`Validation Error: ${err.message}`)
        }
    }
}

