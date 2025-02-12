const userModel = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class authController {
    user_register = async (req,res) => {
        let {name, password, email} = req.body;
        email = email.trim()
        password = password.trim()
        name = name.trim()

        try{
            const get_user = await userModel.findOne({email}).select('+password')

            if(get_user){
                return res.status(404).json({message: "Email Already Exists"})
            } else {
                const user = await userModel.create({
                    name, 
                    email, 
                    password: await bcrypt.hash(password, 9)
                })
                const token = await jwt.sign({
                    name: user.name,
                    email: user.email,
                    _id: user.id
                },'eldad',{
                    expiresIn: '2d'
                })
                return res.status(201).json({message: "User Signup Success", token})
            }
        }catch(error){
            console.log(error.message)
            return res.status(201).json({message: "Internal Server Error", token})
        }

        
    }
}

module.exports = new authController()