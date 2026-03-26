const express=require('express')
const router=express()
const controllers=require('../controllers/lead')
router.post('/create',controllers.createLeads)
module.exports=router