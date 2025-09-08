const mongoose = require("mongoose")
const Doctor = require("./doctor")


const commentSchema = new mongoose.Schema({
    creator: String,
    content: String,
}, {timestamps:true})

// Schema
const appointmentSchema = new mongoose.Schema({
    patientname:{
        type:String,
        required:true
    },
    reason:{
        type: Number,
        min:0,
        max:100
    },
    date:{
        type:Date,
        
    },
    doctor:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Doctor"
    }],
    comments: [commentSchema]
})


// model
const Appointment = mongoose.model("Appointment",appointmentSchema)


// export the model
module.exports = Appointmen