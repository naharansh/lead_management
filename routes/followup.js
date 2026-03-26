const express=require('express')
const router=express()
const constrollers=require('../controllers/followup')
router.post('/create',constrollers.CreateFollowup).get('/all',constrollers.all_followups).get('/followup/:id',constrollers.Followups).delete('/delete/:id',constrollers.delete_followup).put('/update/:id',constrollers.update_followups)
module.exports=router   