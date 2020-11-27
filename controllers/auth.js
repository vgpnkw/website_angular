const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = require('../config/keys')
const User = require("../models/User")
const ErrorHandler = require('../utils/ErrorHandler')

module.exports.login = async function(req,res) {
    // res.status(200).json({
    //     login: {
    //         email: req.body.email,
    //         password: req.body.password
    //     }
    // })
    const candidate = await User.findOne({
        email: req.body.email
    })
    if (candidate){ 
        // Проверка пароля, пользвоатель существует
        const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
        if (passwordResult){
            // Генерация токена
            const token = jwt.sign({
                email: candidate.email,
                userId: candidate._id
            }, keys.jwt, {expiresIn: 3600})
            res.status(200).json({
                token: `Bearer ${token}`
            })
        } else {
            res.status(401).json({
                message: `Неверный пароль. Попробуйте снова.`
            })
        }

    } else {
        res.status(404).json({
            message: `Пользователь с таким email не найден.`
        })
    }
}

module.exports.register = async function(req,res) {
    // const user = new User({
    //     email: req.body.email,
    //     password: req.body.password
    // })
    // user.save().then(() => console.log('User created')) 
    const candidate = await User.findOne({email: req.body.email})
    // Конфликт
    if(candidate){
        res.status(409).json({   
            message: `Такой email уже занят.`                
        })
    } else {
        const salt = bcrypt.genSaltSync(10)
        const password = req.body.password
        const user = new User({
            email: req.body.email,
            password: bcrypt.hashSync(password, salt)
        })
        try{
            await user.save()
            res.status(201).json(user)
        }catch(e){
            ErrorHandler(res, e)
        }
       
    }
    
}