const Truck = require('../models/Truck')

module.exports = {
    addTruck: async (req, res) => {
        try {
            const truck = await Truck.create({
                name: req.body.name,
                lat: req.body.lat,
                lng: req.body.lng
            })
            res.status(201).json({truck: truck})
        } catch (error) {
            console.log(error)
        }
    },
    getTrucks: async (req, res) => {
        try {
            const trucks = await Truck.find()
            res.status(200).json({trucks: trucks})
        } catch (error) {
            console.log(error)
        }
    }
}