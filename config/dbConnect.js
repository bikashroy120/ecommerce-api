const  mongoose  = require("mongoose")


const dbConnect = ()=>{
    try {
        const conn = mongoose.connect("mongodb+srv://bikash:bikash@cluster0.d6mqmni.mongodb.net/")
        console.log("Database connect")
    } catch (error) {
        console.log("Database error")
    }
}

module.exports = dbConnect