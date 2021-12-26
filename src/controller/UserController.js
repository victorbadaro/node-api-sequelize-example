const User = require('../models/User');
const { Op } = require('sequelize');

class UserController {
    async index(request, response) {
        const users = await User.findAll();

        return response.json(users);
    }

    async find(request, response) {
        const { id } = request.params;
        const user = await User.findByPk(Number(id));

        if (!user)
            return response.status(400).json({ error: 'User not found!' });

        return response.json(user);
    }

    async create(request, response) {
        const { name, email } = request.body;
        const userFoundByEmail = await User.findOne({ where: { email } });

        if (userFoundByEmail)
            return response.status(400).json({ error: 'Email already exists!' });

        const user = await User.create({ name, email });

        return response.status(201).json(user);
    }

    async update(request, response) {
        const { id } = request.params;
        const { name, email } = request.body;
        const user = await User.findByPk(Number(id));

        if (!user)
            return response.status(400).json({ error: 'User not found!' });

        const userFoundByEmail = await User.findOne({
            where: {
                id: {
                    [Op.ne]: id
                },
                email
            }
        });

        if (userFoundByEmail)
            return response.status(400).json({ error: 'Email already exists!' });

        await User.update({ name, email }, { where: { id } });
        return response.status(204).send();
    }

    async delete(request, response) {
        const { id } = request.params;
        const user = await User.findByPk(Number(id));

        if (!user)
            return response.status(400).json({ error: 'User not found!' });

        await User.destroy({ where: { id } });
        return response.status(204).send();
    }
}

module.exports = new UserController();