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