// const lead
const lead_source=require('../modules/lead_source')
exports.Create_lead_source=async (req,res) => {
    try {
        const {source,user_id}=req.body
        if(!source||!user_id)
        {
            return res.status(400).json({message:'all required message'})
        }
        const lead_sources=await lead_source.create({
            source,
            user_id
        })
        return res.status(201).json({message:'Lead source created successfully',lead_sources})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:'Internal server error'})
    }
}
