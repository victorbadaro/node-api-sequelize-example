const User = require('../models/User');

class UserController {
    async index(request, response) {

    }

    async find(request, response) {

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

    }

    async delete(request, response) {

    }
}

module.exports = new UserController();