const express=require('express')
const router=express.Router()
const activities=require('../controllers/activites')
router.post('/create_activites',activities.create_activites)
module.exports=router