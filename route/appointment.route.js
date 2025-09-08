const Appointment = require("./models/Appointment")
const Doctor = require("./models/Doctor")
// import the router
const router = require("express").Router()


router.get("/new",async(req,res)=>{
    const allDoctors = await Doctor.find()
    res.render("appointment/new.ejs",{allDoctors: allDoctors})
})

router.post("/",async(req,res)=>{
    try{
        await Appointment.create(req.body)
        res.redirect("/appointment/new")
    }
    catch(error){
        console.log(error)
    }
})

router.get("/",async(req,res)=>{
    try{
        const allAppointment = await Appointment.find().populate("author")
        console.log(allBooks)
        res.render("books/all-books.ejs",{allBooks: allBooks})
    }
    catch(error){
        console.log(error)
    }
})

router.get("/",async(req,res)=>{
    try{
        const allAppointment = await Appointment.find().populate("Doctor")
        console.log(allAppointment)
        res.render("appointment/all-appointment.ejs",{allAppointment: allAppointment})
    }
    catch(error){
        console.log(error)
    }
})


router.get("/:appointmentId",async(req,res)=>{
    try{
        const foundAppointment = await Appointment.findById(req.params.appointmentId)
        console.log(foundBook)
        res.render("appointment/appointment-details.ejs",{foundAppointment: foundAppointment})
    }
    catch(error){
        console.log(error)
    }
})



router.post("/:appointmentId/comment",async(req,res)=>{
    try{
        const foundBook = await Appointment.findById(req.params.bookId)
        console.log(foundBook)
        foundAppointment.comments.push(req.body)
        foundAppointment.save()
        res.redirect(`/appointment/${foundBook._id}`)

    }
    catch(error){
        console.log(error)
    }
})

// export the router
module.exports = router


// 1. get the book by the id
// 2. add the new comment to the book.comments array
// 3. save the book with the updated comment
// 4. redirect back to the books details
