const express=require('express')
const router=express.Router()
const controllers=require('../controllers/login_controllers')
router.post('/create_user',controllers.create_login).get('/all',controllers.All_users).get('/user/:id',controllers.User).delete('/delete/:id',controllers.Delete_user).put('/update/:id',controllers.Update_user)
module.exports=router