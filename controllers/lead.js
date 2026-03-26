const contactus = require('../modules/contactus')
const leads=require('../modules/leads')
const login = require('../modules/login')
exports.createLeads=async (req,res) => {
    try {
        const {title,source,status,priority,note,assigned_to,user_id,contact_id}=req.body
        if(!title || !source || !assigned_to || !user_id || !contact_id){
            return res.status(400).json({message:'All fields are required'})
        }
        const lead=await leads.create({
            title,
            source,
            status,
            priority,
            note,
            assigned_to,
            user_id,
            contact_id
        })
        return res.status(201).json({message:'Lead created successfully',lead})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:'Internal server error'})
    }
}
exports.All_leads=async (req,res) => {
    try {
        const all_leads=await leads.findAll({include:[{model:login,attributes:['name']},{model:contactus,attributes:['name']}]})
        if(all_leads.length === 0)
        {
            return res.status(404).json({message:'No leads found'})
        }
        return res.status(200).json({message:'All leads',all_leads})
    } catch (error) {
        return res.status(500).json({message:'Internal server error',error})
    }
}
exports.Lead_by_id=async (req,res) => {
    try {
        const {id}=req.params
        if(!id)
        {
            return res.status(400).json({message:'id is required'})
        }
        const lead=await leads.findOne({
            where:{id},
            include:[{model:login,attributes:['name']},{model:contactus,attributes:['name']}]
        })
        if(!lead)
        {
            return res.status(404).json({message:'Lead not found'})
        }
        return res.status(200).json({message:'Lead',lead})
    } catch (error) {
        return res.status(500).json({message:'Internal server error',error})
    }
}
exports.Update_lead=async (req,res) => {
    try {
        const {id}=req.params
        const {title,source,status,priority,note,assigned_to,user_id,contact_id}=req.body
        if(!id)
        {
            return res.status(400).json({message:'id is required'})
        }
        const lead=await leads.findOne({
            where:{id}
        })
        if(!lead)
        {
            return res.status(404).json({message:'Lead not found'})
        }
        await lead.update({
            title,
            source,
            status,
            priority,
            note,
            assigned_to,
            user_id,
            contact_id
        })
        return res.status(200).json({message:'Lead updated successfully',lead})
    } catch (error) {
        return res.status(500).json({message:'Internal server error',error})
    }
}
exports.Delete_lead=async (req,res) => {
    try {
        const {id}=req.params
        if(!id)
        {
            return res.status(400).json({message:'id is required'})
        }
        const lead=await leads.findOne({
            where:{id}
        })
        if(!lead)
        {
            return res.status(404).json({message:'Lead not found'})
        }
        await lead.destroy()
        return res.status(200).json({message:'Lead deleted successfully'})
    } catch (error) {
        return res.status(500).json({message:'Internal server error',error})
    }
}