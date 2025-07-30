const doctor = require("../models/doctor")
const appointment = require("../models/appointments")
// import the router
const router = require("express").Router()



// write your routes

router.get("/new",async(req,res)=>{
    const alldoctors = await doctor.find()
    res.render("appointment/new.ejs",{alldoctors: alldoctors})
})

router.post("/",async(req,res)=>{
    try{
        await appoitment.create(req.body)
        res.redirect("/appointment/new")
    }
    catch(error){
        console.log(error)
    }
})

router.get("/",async(req,res)=>{
    try{
        const allBooks = await Book.find().populate("doctor")
        console.log(allBooks)
        res.render("appointment/all-appoitnments.ejs",{allappointments : allappointments})
    }
    catch(error){
        console.log(error)
    }
})


router.get("/:appointmentId",async(req,res)=>{
    try{
        const foundappointment = await appointment.findById(req.params.appointmentId)
        console.log(foundappointment)
        res.render("appointment/appointment-details.ejs",{foundappointment: foundappointment})
    }
    catch(error){
        console.log(error)
    }
})

// 1. get the book by the id
// 2. add the new comment to the book.comments array
// 3. save the book with the updated comment
// 4. redirect back to the books details

router.post("/:appointmentId/comment",async(req,res)=>{
    try{
        const foundappointment = await Bappoi.findById(req.params.appointmentIdId)
        console.log(foundappointment)
        foundappointment.comments.push(req.body)
        foundappointment.save()
        res.redirect(`/appointments/${foundappointment._id}`)

    }
    catch(error){
        console.log(error)
    }
})

// export the router
module.exports = router

// exercise create the author rou