const Vendor = require('../models/Vendor')
const bcrypt = require('bcryptjs')

module.exports = {
    registerVendor: async (req, res) => {
        const {firstName, lastName, email, password, password2} = req.body
        const errors = []
        if(!firstName || !lastName || !email || !password || !password2){
            errors.push({errorMsg: 'Please fill in all fields'})
        }

        if(password !== password2){
            errors.push({errorMsg: 'Passwords must match'})
        }

        if(password.length < 8){
            errors.push({errorMsg: 'Password must be at least 8 characters long'})
        }

        const exists = await Vendor.findOne({email: email})
        if(exists){
            errors.push({errorMsg: 'This email is already taken'})
        }

        if(errors.length > 0){
            res.status(400).json(errors)
        }

        else{
            const hashedPW = await bcrypt.hash(password, 10)
            const newVendor = new Vendor({
                firstName,
                lastName,
                email,
                password: hashedPW
            })
            await newVendor.save()
            res.status(200).json({msg: 'User has been created and added to DB'})
        }
    }
}