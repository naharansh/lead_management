const bcrypt=require('bcrypt')
const login=require('../modules/login')
exports.create_login=async(req,res)=>{
    const {name,password,email,company_name,phone}=req.body
    if(!name ||!password||!email)
    {   
        return res.status(400).json({message:'fields are required'})
    }
    const hashed_password=await bcrypt.hash(password,10)
    const user=await login.create({name,password:hashed_password,email,company_name,phone})
    res.status(201).json({message:'user created successfully',user})
}