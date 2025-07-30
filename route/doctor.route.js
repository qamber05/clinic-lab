const doctor = require("../models/doctor")
const appointment = require("../models/appointments")
const router = require("express").Router()


router.get("/new",(req,res)=>{
    res.render("doctors/new.ejs")
})

router.post("/",async(req,res)=>{
    try{
        const createddoctor = await doctor.create(req.body)
        res.redirect("/doctor/new")
    }
    catch(error){
        console.log(error)
    }
})



module.exports = router