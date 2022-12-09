const cloudinary = require("../middleware/cloudinary");
const Truck = require('../models/Truck')
const Menu = require('../models/Menu')

module.exports = {
    addTruck: async (req, res) => {
        try {
            const fileStr = req.body.previewSource
            const result = await cloudinary.uploader.upload(fileStr);

            const truck = await Truck.create({
                name: req.body.name,
                coordinates: req.body.coordinates,
                address: req.body.address,
                city: req.body.city,
                state: req.body.state,
                zip: req.body.zip,
                image: result.secure_url,
                userId: req.user._id,
                cuisine1: req.body.cuisine1,
                cuisine2: req.body.cuisine2
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
    },
    getMyTruck: async (req, res) => {
        try {
            const trucks = await Truck.find({userId: req.user._id})
            res.status(200).json({trucks: trucks})
        } catch (error) {
            console.log(error)
        }
    },
    addFoodItem: async (req, res) => {
        try {
            const food = await Menu.create({
                price: req.body.price,
                food: req.body.food,
                userId: req.user._id
            })
            res.status(200).json({food: food})
        } catch (error) {
            console.log(error)
        }
    },
    getFoodItems: async (req, res) => {
        try {
            const food = await Menu.find({userId: req.user._id})
            res.status(200).json({food: food})
        } catch (error) {
            console.log(error)
        }
    },
    deleteFoodItem: async (req, res) => {
        try {
            await Menu.findByIdAndRemove({_id: req.params.id}).exec()
            res.status(200).json({msg: 'Item removed'})
        } catch (error) {
            console.log(error)
        }
    },
    updateTruck: async (req, res) => {
        try {
            await Truck.findByIdAndUpdate({_id: req.params.id}, {
                address: req.body.address,
                city: req.body.city,
                state: req.body.state,
                zip: req.body.zip,
                coordinates: req.body.coordinates,
            })
            res.status(200).json({msg: 'Address updated'})
        } catch (error) {
            console.log(error)
        }
    }
}