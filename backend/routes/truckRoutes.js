const express = require('express')
const router = express.Router()
const truckController = require('../controllers/truckController')

router.get('/getTrucks', truckController.getTrucks)
router.get('/getMyTruck', truckController.getMyTruck)
router.get('/getFoodItems', truckController.getFoodItems)
router.post('/addTruck', truckController.addTruck)
router.post('/addFoodItem', truckController.addFoodItem)
router.delete('/deleteFoodItem/:id', truckController.deleteFoodItem)
router.put('/updateTruck/:id', truckController.updateTruck)


module.exports = router