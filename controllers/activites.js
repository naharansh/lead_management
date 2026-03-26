const activities=require('../modules/activities')
exports.create_activites=async (req,res) => {
    try {
        const {user_id,action,description,lead_id}=req.body
        if(!user_id || !action || !lead_id){
            return res.status(400).json({message:'all required message'})
        }
        const new_activities=await activities.create({
            user_id,
            action,
            description,
            lead_id
        })
        return res.status(200).json({message:'activities created successfully',new_activities})
    } catch (error) {
        return res.status(500).json({message:'internal server error'})
    }
}
exports.All_activities=async (req,res) => {
    try {
        const all_activities=await activities.findAll()
        if(all_activities.length === 0)
        {
            return res.status(404).json({message:'activities not found'})
        }
        return res.status(200).json({message:'activities fetched successfully',all_activities})
    } catch (error) {
        return res.status(500).json({message:'internal server error'})
    }
}
exports.Activities_by_id=async (req,res) => {
    try {
        const {id}=req.params
        if(!id)
        {
            return res.status(400).json({message:'id is required'})
        }
        const activitiess=await activities.findOne({where:{id}})
        if(!activitiess)
        {
            return res.status(404).json({message:'activities not found'})
        }
        return res.status(200).json({message:'activities fetched successfully',activitiess})
    } catch (error) {
        return res.status(500).json({message:'internal server error'})
    }
}
exports.Update_activities=async (req,res) => {
    try {
        const {id}=req.params
        const {user_id,action,description,lead_id}=req.body
        if(!id)
        {
            return res.status(400).json({message:'id is required'})
        }
        const activitiess=await activities.findOne({where:{id}})
        if(!activitiess)
        {
            return res.status(404).json({message:'activities not found'})
        }
        await activitiess.update({user_id,action,description,lead_id})
        return res.status(200).json({message:'activities updated successfully',activitiess})
    } catch (error) {
        return res.status(500).json({message:'internal server error'})
    }
}
exports.Delete_activities=async (req,res) => {
    try {
        const {id}=req.params
        if(!id)
        {
            return res.status(400).json({message:'id is required'})
        }
        const activitiess=await activities.findOne({where:{id}})
        if(!activitiess)
        {
            return res.status(404).json({message:'activities not found'})
        }
        await activitiess.destroy({where:{id}})
        return res.status(200).json({message:'activities deleted successfully'})
    } catch (error) {
        return res.status(500).json({message:'internal server error'})
    }
}