const lead_status_master=require('../modules/lead_status_master')
exports.createLeadStatusMaster=async (req,res)=>{
    try {
        const {status,color,user_id}=req.body
        if(!status || !user_id){
            return res.status(400).json({message:'All fields are required'})
        }
        const lead_status_masters=await lead_status_master.create({
            status,
            color,
            user_id
        })
        return res.status(201).json({message:'Lead status master created successfully',lead_status_master})
    } catch (error) {
        return res.status(500).json({message:'Internal server error'})
    }
}