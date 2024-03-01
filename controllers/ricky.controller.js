const Ricky = require('../models/models.ricky');

class RickyController {
    async get(res) {
        try {
            const data = await Ricky.findAll();
            res.send(data);
        } catch (error) {
            console.error(error)
            res.status(500).send('An error occurred while trying to retrieve characters. Please try again.')
        }
    }

    async create(req, res) {
        try {
            const { id, name, status, species, type, gender, Image, url } = req.body
            if (!name) return res.status(400).send('Name is required')
            if (!status) return res.status(400).send('Status is required')
            if (!species) return res.status(400).send('Species is required')
            if (!type) return res.status(400).send('Type is required')
            if (!gender) return res.status(400).send('genero is required')
            if (!Image) return res.status(400).send('Image is required')
            if (!url) return res.status(400).send('Url is required')
            const ricky = await Ricky.create({
                id,
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
            const id = req.params.id

            const destroyResult = await Ricky.destroy({
                where: {
                    Ricky: id
                }
            })
            if (destroyResult) {
                return res.sendStatus(204)
            }

            res.status(500)

        } catch (error) {
            console.error(error)
            res.status(500).send('An error occurred while trying to delete a character. Please try again.')
        }

    }
}

module.exports = RickyController;
