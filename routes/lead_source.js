const express=require('express')
const router=express.Router()
const lead_source=require('../controllers/lead_sourc')
router.post('/create',lead_source.Create_lead_source)
module.exports=router