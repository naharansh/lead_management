const express=require('express')
const router=express.Router()
const createCompanies=require('../controllers/campanies')
router.post('/create',createCompanies.createCompanies).get('/all',createCompanies.All_companies).get('/company/:id',createCompanies.company_by_id).patch('/update/:id',createCompanies.Update_by_id).delete('/delete/:id',createCompanies.Delete_by_id)
module.exports=router