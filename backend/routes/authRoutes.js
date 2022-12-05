const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')
const passport = require("passport");

router.post('/registerVendor', authController.registerVendor)
router.post('/loginVendor', (req, res, next) => {     
  passport.authenticate('local', (err, user, info) => {       
    if (err) {
      return next(err); 
    }if (!user) { 
      return res.json(info); 
    }req.logIn(user, (err) => {         
      if (err) { 
        return next(err); 
      } return res.json({message: 'Success'});       
    });     
  })(req, res, next);   
});

module.exports = router