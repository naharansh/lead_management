const express=require('express')
const router=express.Router()
const lead_source=require('../controllers/lead_sourc')
router.post('/create',lead_source.Create_lead_source).get('/all',lead_source.All_lead_sources).get('/lead_source/:id',lead_source.Lead_source_by_id).put('/update/:id',lead_source.Update_lead_source).delete('/delete/:id',lead_source.Delete_lead_source)
module.exports=router