const express=require('express')
const router=express()
const controllers=require('../controllers/lead')
router.post('/create',controllers.createLeads).get('/all',controllers.All_leads).get('/lead/:id',controllers.Lead_by_id).put('/update/:id',controllers.Update_lead).delete('/delete/:id',controllers.Delete_lead)
module.exports=router