const express=require('express')
const controllers=require('../controllers/lead_status_master')
const routers=express()
routers.post('/create',controllers.createLeadStatusMaster).get('/all',controllers.All_lead_status_master).get('/lead_status_master/:id',controllers.Lead_status_master_by_id).put('/update/:id',controllers.Update_lead_status_master).delete('/delete/:id',controllers.Delete_lead_status_master)
module.exports=routers