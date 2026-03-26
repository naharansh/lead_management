const contacts=require('../modules/contactus')
exports.CreateContacts=async (req,res) => {
    try {
        const {name,phone,email,city,state,source,user_id}=req.body
        if(!phone)
        {
            return res.status(400).json({message:'Phone number is required'})
        }
        const contactus=await contacts.create({
            name,
            phone,
            email,
            city,
            state,
            source,
            user_id
        })
        return res.status(201).json({message:'Contact created successfully',contactus})
    } catch (error) {
        return res.status(500).json({message:'Internal server error',error})
    }
}