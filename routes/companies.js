const express=require('express')
const router=express.Router()
const createCompanies=require('../controllers/campanies').createCompanies
router.post('/create',createCompanies)
module.exports=router