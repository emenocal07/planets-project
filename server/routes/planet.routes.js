const router = require("express").Router()
const Planet = require("../models/Planet.model");


//GET ALL PLANETS
router.get('/', (req, res) => {

    Planet
        .find()
        .select('name image')
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

//GET ONE PLANET
router.get('/:planet_id', (req, res) => {
    const { planet_id } = req.params

    Planet
        .findById(planet_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

//CREATE PLANET

router.post('/create', (req, res) => {
    const { name, image, velocity, distance, description } = req.body

    Planet
        .create({ name, image, velocity, distance, description })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

//EDIT PLANET
router.put('/edit/:planet_id', (req, res) => {
    const { planet_id } = req.params
    const { name, image, velocity, distance, description } = req.body

    Planet
        .findByIdAndUpdate(planet_id, { name, image, velocity, distance, description }, { new: true })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

//DELETE PLANET
router.delete('/delete/:planet_id', (req, res) => {
    const { planet_id } = req.params

    Planet
        .findByIdAndDelete(planet_id)
        .then(res.json({ message: 'Planeta eliminado' }))
        .catch(err => res.status(500).json(err))
})


module.exports = router