const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')

router.post('/registerVendor', authController.registerVendor)

module.exports = router