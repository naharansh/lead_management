const express=require('express')
const router=express()
const constrollers=require('../controllers/followup')
router.post('/create',constrollers.CreateFollowup)
module.exports=router