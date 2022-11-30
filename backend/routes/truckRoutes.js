const express = require('express')
const router = express.Router()
const truckController = require('../controllers/truckController')

router.get('/getTrucks', truckController.getTrucks)
router.post('/addTruck', truckController.addTruck)

module.exports = router