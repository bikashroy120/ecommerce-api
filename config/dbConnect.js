const  mongoose  = require("mongoose")


const dbConnect = ()=>{
    try {
        const conn = mongoose.connect("mongodb+srv://admin:admin@cluster0.jn0fzfq.mongodb.net/")
        console.log("Database connect")
    } catch (error) {
        console.log("Database error")
    }
}

module.exports = dbConnect