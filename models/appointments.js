
const mongoose = require("mongoose")
//const doctor = require(" ")

const commentSchema = new mongoose.Schema({
    creator: String,
    content: String,
}, {timestamps:true})

// Schema
const appointmentsSchema = new mongoose.Schema({
    pateint:{
        type:String,
        required:true
    },
    date:{
        type: Date,
    },
    doctor:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"doctor"
    }],
    comments : [commentSchema]
})


// model
const appointments = mongoose.model("appointments",appointmentsSchema)


// export the model
module.exports = appointments
