const cloudinary = require("../middleware/cloudinary");
const Truck = require('../models/Truck')

module.exports = {
    addTruck: async (req, res) => {
        try {
            const fileStr = req.body.previewSource
            const result = await cloudinary.uploader.upload(fileStr);

            const truck = await Truck.create({
                name: req.body.name,
                coordinates: req.body.coordinates,
                address: req.body.address,
                image: result.secure_url,
                userId: req.user._id
            })
            res.status(201).json({truck: truck})
        } catch (error) {
            console.log(error)
        }
    },
    getTrucks: async (req, res) => {
        try {
            const trucks = await Truck.find({userId: req.user._id})
            res.status(200).json({trucks: trucks})
        } catch (error) {
            console.log(error)
        }
    }
}