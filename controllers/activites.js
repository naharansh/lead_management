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