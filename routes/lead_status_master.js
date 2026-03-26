const express=require('express')
const controllers=require('../controllers/lead_status_master')
const routers=express()
routers.post('/create',controllers.createLeadStatusMaster)
module.exports=routers