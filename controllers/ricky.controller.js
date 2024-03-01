const Ricky = require('../models/models.ricky');

class RickyController {
    async get(req, res) {
        try {
            const rickies = await Ricky.findAll();

            res.status(200).send(rickies);
        } catch (error) {
            console.error(error);
            res.status(500).send('An error occurred while trying to fetch characters. Please try again.');
        }
    }

    async create(req, res) {
        try {
            const { name, status, species, type, gender, Image, url } = req.body
            if (!name) return res.status(400).send('Name is required')
            if (!status) return res.status(400).send('Status is required')
            if (!species) return res.status(400).send('Species is required')
            if (!type) return res.status(400).send('Type is required')
            if (!gender) return res.status(400).send('genero is required')
            if (!Image) return res.status(400).send('Image is required')
            if (!url) return res.status(400).send('Url is required')
            const ricky = await Ricky.create({

                name,
                status,
                species,
                type,
                gender,
                Image,
                url
            })
            res.status(201).send(ricky)
        } catch (error) {
            console.error(error)
            res.status(500).send('An error occurred while trying to create a new character. Please try again.')
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                return res.status(400).send('Character ID is required');
            }

            const ricky = await Ricky.findByPk(id);
            if (!ricky) {
                return res.status(404).send('Character not found');
            }
            await ricky.destroy();

            res.status(200).send('Character deleted successfully');
        } catch (error) {
            console.error(error);
            res.status(500).send('An error occurred while trying to delete the character. Please try again.');
        }
    }
}

module.exports = RickyController;
