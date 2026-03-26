const express=require('express')
const controllers=require('../controllers/contactus')
const router=express.Router()
router.post('/create',controllers.CreateContacts).get('/all',controllers.All_contactus).get('/contact/:id',controllers.Contact_by_id).put('/update/:id',controllers.Update_contact).delete('/delete/:id',controllers.Delete_contact)
module.exports=router