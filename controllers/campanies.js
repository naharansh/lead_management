const companies=require('../modules/companies')
exports.createCompanies=async (req,res) => {
    try {
        const {name,owner_id}=req.body
        if(!name||!owner_id)
        {
            return res.status(400).json({message:'fields are required'})
        }
        const new_company=await companies.create({
            name,
            owner_id
        })
        return res.status(201).json({message:'company created successfully',new_company})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:'internal server error'})
    }
}