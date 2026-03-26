const bcrypt = require('bcrypt')
const login = require('../modules/login')
const { where } = require('sequelize')
exports.create_login = async (req, res) => {
    const { name, password, email, company_name, phone } = req.body
    if (!name || !password || !email) {
        return res.status(400).json({ message: 'fields are required' })
    }
    const hashed_password = await bcrypt.hash(password, 10)
    const user = await login.create({ name, password: hashed_password, email, company_name, phone })
    res.status(201).json({ message: 'user created successfully', user })
}
exports.All_users = async (req, res) => {
    try {
        const all_users = await login.findAll()
        console.log(all_users)
        if (all_users.length === 0) {
            return res.status(404).json({ message: 'no users found' })
        }
        return res.status(200).json({ message: 'users found successfully', all_users })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'internal server error' })
    }
}
exports.User = async (req, res) => {
    try {
        const { id } = req.params
        if (!id) {
            return res.status(400).json({ message: 'id is required' })
        }
        const user = await login.findByPk(id)

        if (!user) {
            return res.status(404).json({ message: 'user not found' })
        }
        return res.status(200).json({ message: 'user found successfully', user })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'internal server error' })
    }
}
exports.Delete_user = async (req, res) => {
    try {
        const { id } = req.params
        if (!id) {
            return res.status(400).json({ message: 'id is required' })
        }
        const user = await login.findByPk(id)
        if (!user) {
            return res.status(404).json({ message: 'user not found' })
        }
        await user.destroy()
        return res.status(200).json({ message: 'user deleted successfully' })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'internal server error' })
    }
}
exports.Update_user=async (req,res) => {
    try {
        const {id}=req.params
        if(!id)
        {
            return res.status(400).json({message:'id is required'})
        }
        const user=await login.findByPk(id)
        if(!user)
        {
            return res.status(404).json({message:'user not found'})
        }
        await user.update(req.body,{where:{id:id}})
        return res.status(200).json({message:'user update the details successfully'})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:'internal server error'})
    }
}