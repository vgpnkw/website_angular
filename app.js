const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const cors = require("cors") //если клиент на другом домене
const morgan = require("morgan") // логирование запросов
const passport = require('passport')


const authRoutes = require("./routes/auth")
const analyticsRoutes = require("./routes/analytics")
const categoryRoutes = require("./routes/category")
const orderRoutes = require("./routes/order")
const positionRoutes = require("./routes/position")
const keys = require('./config/keys')
const app = express()


mongoose.connect(keys.mongoURI)
    .then(() => console.log('MongoDB connected'))
    .catch(errorDB => console.log(errorDB))

app.use(passport.initialize())
require('./middleware/passport')(passport)

app.use(morgan('dev'))
app.use('/uploads', express.static('uploads'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())



app.use('/api/auth', authRoutes)
app.use('/api/analytics', analyticsRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/order', orderRoutes)
app.use('/api/position', positionRoutes)


module.exports = app