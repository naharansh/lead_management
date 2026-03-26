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
exports.All_lead_sources=async (req,res) => {
try {
    const lead_sources=await lead_source.findAll()
    if(lead_sources.length === 0)
    {
        return res.status(404).json({message:'Lead sources not found'})
    }
    return res.status(200).json({message:'Lead sources fetched successfully',lead_sources})
} catch (error) {
    console.log(error)
    return res.status(500).json({message:'Internal server error'})
}    
}
exports.Lead_source_by_id=async (req,res) => {
    try {
        const {id}=req.params
        if(!id)
        {
            return res.status(400).json({message:'id is required'})
        }
        const lead_sources=await lead_source.findOne({where:{id}})
        if(!lead_sources)
        {
            return res.status(404).json({message:'Lead source not found'})
        }
        return res.status(200).json({message:'Lead source fetched successfully',lead_sources})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:'Internal server error'})
    }    
}
exports.Update_lead_source=async (req,res) => {
    try {
        const {id}=req.params
        const {source,user_id}=req.body
        if(!id)
        {
            return res.status(400).json({message:'id is required'})
        }
        const lead_sources=await lead_source.findOne({where:{id}})
        if(!lead_sources)
        {
            return res.status(404).json({message:'Lead source not found'})
        }
        await lead_sources.update({source,user_id})
        return res.status(200).json({message:'Lead source updated successfully',lead_source})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:'Internal server error'})
    }    
}
exports.Delete_lead_source=async (req,res) => {
    try {
        const {id}=req.params
        if(!id)
        {
            return res.status(400).json({message:'id is required'})
        }
        const lead_sources=await lead_source.findOne({where:{id}})
        if(!lead_sources)
        {
            return res.status(404).json({message:'Lead source not found'})
        }
        await lead_sources.destroy({where:{id}})
        return res.status(200).json({message:'Lead source deleted successfully'})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:'Internal server error'})
    }    
}