const contacts=require('../modules/contactus')
const login = require('../modules/login')
exports.CreateContacts=async (req,res) => {
    try {
        const {name,phone,email,city,state,source,user_id}=req.body
        if(!phone)
        {
            return res.status(400).json({message:'Phone number is required'})
        }
        const contactus=await contacts.create({
            name,
            phone,
            email,
            city,
            state,
            source,
            user_id
        })
      res.status(201).json({message:'Contact created successfully',contactus})
    } catch (error) {
        return res.status(500).json({message:'Internal server error',error})
    }
}
exports.All_contactus=async (req,res) => {
    try {
        const all_contactus=await contacts.findAll({
            include:[{model:login,attributes:['name']}]
        })
        if(all_contactus.length === 0 )
        {
            return res.status(404).json({message:'No contacts found'})
        }
        return res.status(200).json({message:'All contacts',all_contactus})
    } catch (error) {
        return res.status(500).json({message:'Internal server error',error})
    }
}
exports.Contact_by_id=async (req,res) => {
    try {
        const {id}=req.params
        if(!id)
        {
            return res.status(400).json({message:'id is required'})
        }
        const contactus=await contacts.findOne({
            where:{id},
            include:[{model:login,attributes:['name']}]
        })
        if(!contactus)
        {
            return res.status(404).json({message:'Contact not found'})
        }
        return res.status(200).json({message:'Contact',contactus})
    } catch (error) {
        return res.status(500).json({message:'Internal server error',error})
    }
}
exports.Update_contact=async (req,res) => {
    try {
        const {id}=req.params
        const {name,phone,email,city,state,source,user_id}=req.body
        if(!id)
        {
            return res.status(400).json({message:'id is required'})
        }
        const contactus=await contacts.findOne({
            where:{id}
        })
        if(!contactus)
        {
            return res.status(404).json({message:'Contact not found'})
        }
        await contactus.update({
            name,
            phone,
            email,
            city,
            state,
            source,
            user_id
        })
        return res.status(200).json({message:'Contact updated successfully',contactus})
    } catch (error) {
        return res.status(500).json({message:'Internal server error',error})
    }
}
exports.Delete_contact=async (req,res) => {
    try {
        const {id}=req.params
        if(!id)
        {
            return res.status(400).json({message:'id is required'})
        }
        const contactus=await contacts.findOne({
            where:{id}
        })
        if(!contactus)
        {
            return res.status(404).json({message:'Contact not found'})
        }
        await contactus.destroy()
        return res.status(200).json({message:'Contact deleted successfully'})
    } catch (error) {
        return res.status(500).json({message:'Internal server error',error})
    }
}