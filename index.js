const bodyParser = require("body-parser");
const express = require("express");
const dbConnect = require("./config/dbConnect");
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const cors = require('cors')
const { notFound, errorHandeler } = require("./middlewarer/errorHandelere");
const app = express()
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const blogRoutes = require('./routes/blogRoutes');
const productCatRoutes = require("./routes/productCatRoutes");
const colorRoutes = require("./routes/colorRoutes");
const brandRoutes = require("./routes/brandRoutes");
const blogCatRoutes = require("./routes/blogCatRoutes");
const couponRoutes = require("./routes/couponRouters");
const uploadImage = require("./routes/uploadRoute")
dbConnect()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cookieParser())
app.use(morgan('dev'))


app.use("/api/user", authRoutes);
app.use("/api/product", productRoutes);
app.use("/api/blog",blogRoutes);
app.use("/api/product-category",productCatRoutes);
app.use("/api/color",colorRoutes);
app.use("/api/brand",brandRoutes);
app.use("/api/blog-category",blogCatRoutes)
app.use("/api/coupon",couponRoutes)
app.use("/api/upload",uploadImage)
app.use(notFound)
app.use(errorHandeler)
app.listen(PORT,()=>{
    console.log(`Server is running at PORT ${PORT}`)
})
