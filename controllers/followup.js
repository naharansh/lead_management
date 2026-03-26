const { Lead, Login } = require('../modules')
const followups=require('../modules/followups')
const login = require('../modules/login')
exports.CreateFollowup=async (req,res)=>{
    try {
        console.log(req.body)
        const {lead_id,followup_date,next_followup_date,followup_status,remarks,user_id}=req.body
        if(!lead_id || !followup_date || !next_followup_date || !user_id){
            return res.status(400).json({message:'All fields are required'})
        }
        const followup=await followups.create({
            lead_id,
            followup_date,
            next_followup_date,
            followup_status,
            remarks,
            user_id
        })
        return res.status(201).json({message:'Followup created successfully',followup})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:'Internal server error'})
    }
}
exports.all_followups=async (req,res) => {
    try {
        const all_followups=await followups.findAll({include:[{model:Lead},{model:Login}]})
        if(all_followups.length === 0)
        {
            return res.status(404).json({message:'Followups not found'})
        }
        return res.status(200).json({message:'Followups fetched successfully',all_followups})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:'Internal server error'})
    }
}
exports.Followups=async (req,res)=>{
    try {
        const {id}=req.params
        if(!id)
        {
            return res.status(400).json({message:'Followup id is required'})
        }
        const followup=await followups.findOne({where:{id},include:[{model:Lead},{model:Login}]})
        if(!followup)
        {
            return res.status(404).json({message:'Followup not found'})
        }
        return res.status(200).json({message:'Followup fetched successfully',followup})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:'Internal server error'})
    }
}
exports.delete_followup=async (req,res)=>{
    try {
        const {id}=req.params
        if(!id)
        {
            return res.status(400).json({message:'Followup id is required'})
        }
        const followup=await followups.destroy({where:{id}})
        if(!followup)
        {
            return res.status(404).json({message:'Followup not found'})
        }
        return res.status(200).json({message:'Followup deleted successfully',followup})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:'Internal server error'})
    }
}
exports.update_followups=async (req,res) => {
    try {
        const {id}=req.params
        if(!id)
        {
            return res.status(400).json({message:'Followup id is required'})
        }
        const followup=await followups.update(req.body,{where:{id}})
        if(!followup)
        {
            return res.status(404).json({message:'Followup not found'})
        }
        return res.status(200).json({message:'Followup updated successfully',followup})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:'Internal server error'})
    }
}