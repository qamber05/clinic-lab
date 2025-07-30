const mongoose = require("mongoose")

const doctorSchemaor = new mongoose.Schema({
    name:{
        type:String
    },
    speciality: {
        type:String
    },
    yearsOfExperience: {
        type: Number
    }
})

const doctor = mongoose.model("doctor",doctorSchemaor)

module.exports = doctor