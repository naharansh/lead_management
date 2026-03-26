const leads=require('../modules/leads')
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
        return res.status(500).json({message:'Internal server error'})
    }
}