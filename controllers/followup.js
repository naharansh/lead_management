const followups=require('../modules/followups')
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