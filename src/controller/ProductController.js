const Product = require('../models/Product');
const User = require('../models/User');

class ProductController {
    async index(request, response) {
        const products = await Product.findAll();

        return response.json(products);
    }

    async find(request, response) {
        const { id } = request.params;
        const product = await Product.findByPk(Number(id));

        if (!product)
            return response.status(400).json({ error: 'Product not found!' });

        return response.json(product);
    }

    async create(request, response) {
        const { description, user_id } = request.body;

        if (!description)
            return response.status(400).json({ error: 'Product description can\'t be null' });

        if (user_id === null)
            return response.status(400).json({ error: 'User ID can\'t be null' });

        const user = await User.findByPk(Number(user_id));

        if (!user)
            return response.status(400).json({ error: 'User not found!' });

        const product = await Product.create({ description, user_id });

        return response.status(201).json(product);
    }

    async update(request, response) {
        const { id } = request.params;
        const { description } = request.body;
        const product = await Product.findByPk(Number(id));

        if (!product)
            return response.status(400).json({ error: 'Product not found!' });

        if (!description)
            return response.status(400).json({ error: 'Product description can\'t be null' });

        await Product.update({ description }, { where: { id } });
        return response.status(204).send();
    }

    async delete(request, response) {
        const { id } = request.params;
        const product = await Product.findByPk(Number(id));

        if (!product)
            return response.status(400).json({ error: 'Product not found!' });

        await Product.destroy({ where: { id } });
        return response.status(204).send();
    }
}

module.exports = new ProductController();