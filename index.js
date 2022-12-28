const bodyParser = require("body-parser");
const express = require("express");
const dbConnect = require("./config/dbConnect");
const { notFound, errorHandeler } = require("./middlewarer/errorHandelere");
const app = express()
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000
const authRoutes = require("./routes/authRoutes")
dbConnect()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))


app.use("/api/user", authRoutes)
app.use(notFound)
app.use(errorHandeler)
app.listen(PORT,()=>{
    console.log(`Server is running at PORT ${PORT}`)
})
