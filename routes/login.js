const express=require('express')
const router=express.Router()
const controllers=require('../controllers/login_controllers')
router.post('/create_user',controllers.create_login)
module.exports=router   