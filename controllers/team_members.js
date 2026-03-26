const team_memberss=require('../modules/team_members')
exports.create_Members=async (req,res) => {
    try {
       const {name,email,role,user_id}=req.body
       if(!name||!email||!role||!user_id)
       {
        return res.status(400).json({message:'all required message'})
       }
       const team_members=await team_memberss.create({
        name,
        email,
        role,
        user_id
       })
       return res.status(201).json({message:'Team member created successfully',team_members})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:'Internal server error'})
    }
}
exports.all_members=async (req,res) => {
    try {
        const all_members=await team_memberss.findAll()
        if(all_members.length === 0)
        {
            return res.status(404).json({message:'Team members not found'})
        }
        return res.status(200).json({message:'Team members fetched successfully',all_members})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:'Internal server error'})
    }
}
exports.member_by_id=async (req,res) => {
    try {
        const {id}=req.params
        if(!id)
        {
            return res.status(400).json({message:'id is required'})
        }
        const team_members=await team_memberss.findOne({where:{id}})
        if(!team_members)
        {
            return res.status(404).json({message:'Team member not found'})
        }
        return res.status(200).json({message:'Team member fetched successfully',team_members})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:'Internal server error'})
    }
}
exports.Update_member=async (req,res) => {
    try {
        const {id}=req.params
        const {name,email,role,user_id}=req.body
        if(!id)
        {
            return res.status(400).json({message:'id is required'})
        }
        const team_members=await team_memberss.findOne({where:{id}})
        if(!team_members)
        {
            return res.status(404).json({message:'Team member not found'})
        }
        await team_members.update({name,email,role,user_id})
        return res.status(200).json({message:'Team member updated successfully',team_members})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:'Internal server error'})
    }
}
exports.Delete_members=async (req,res) => {
    try {
        const {id}=req.params
        if(!id)
        {
            return res.status(400).json({message:'id is required'})
        }
        const team_members=await team_memberss.findOne({where:{id}})
        if(!team_members)
        {
            return res.status(404).json({message:'Team member not found'})
        }
        await team_members.destroy({where:{id}})
        return res.status(200).json({message:'Team member deleted successfully'})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:'Internal server error'})
    }
}