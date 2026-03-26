const express=require('express')
const Router=express.Router()
const controllers=require('../controllers/team_members')
Router.post('/create_Members',controllers.create_Members).get('/all',controllers.all_members).get('/member/:id',controllers.member_by_id).put('/update/:id',controllers.Update_member).delete('/delete/:id',controllers.Delete_members)
module.exports=Router   