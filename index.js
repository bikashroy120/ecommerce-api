const bodyParser = require("body-parser");
const express = require("express");
const dbConnect = require("./config/dbConnect");
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const { notFound, errorHandeler } = require("./middlewarer/errorHandelere");
const app = express()
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const blogRoutes = require('./routes/blogRoutes')
dbConnect()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cookieParser())
app.use(morgan('dev'))


app.use("/api/user", authRoutes)
app.use("/api/product", productRoutes);
app.use("/api/blog",blogRoutes)
app.use(notFound)
app.use(errorHandeler)
app.listen(PORT,()=>{
    console.log(`Server is running at PORT ${PORT}`)
})
