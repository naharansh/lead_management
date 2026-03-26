const express=require('express')
const Router=express.Router()
const controllers=require('../controllers/team_members')
Router.post('/create_Members',controllers.create_Members)
module.exports=Router