const express=require('express')
const router=express.Router()
const activities=require('../controllers/activites')
router.post('/create_activites',activities.create_activites).get('/all',activities.All_activities).get('/activities/:id',activities.Activities_by_id).put('/update/:id',activities.Update_activities).delete('/delete/:id',activities.Delete_activities)
module.exports=router