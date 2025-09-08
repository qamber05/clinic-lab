const Doctor = require("../models/doctor")
const Author = require("./models/Doctor")
const router = require("express").Router()


router.get("/new",(req,res)=>{
    res.render("doctors/new.ejs")
})

router.post("/",async(req,res)=>{
    try{
        const createdDoctor = await Doctor.create(req.body)
        res.redirect("/doctors/new")
    }
    catch(error){
        console.log(error)
    }
})



module.exports = router