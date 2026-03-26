const express=require('express')
const controllers=require('../controllers/contactus')
const router=express.Router()
router.post('/create',controllers.CreateContacts)
module.exports=router