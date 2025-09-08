const mongoose = require("mongoose")

const doctorSchema = new mongoose.Schema({
    name:{
        type:String
    }
})

const Doctor = mongoose.model("Doctor",doctorSchema)

module.exports = Doctor