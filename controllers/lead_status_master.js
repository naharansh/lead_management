const lead_status_master = require('../modules/lead_status_master')
// const lead_status_master=require('../modules/lead_status_master')
const login = require('../modules/login')
exports.createLeadStatusMaster = async (req, res) => {
    try {
        const { status, color, user_id } = req.body
        if (!status || !user_id) {
            return res.status(400).json({ message: 'All fields are required' })
        }
        const lead_status_masters = await lead_status_master.create({
            status,
            color,
            user_id
        })
        return res.status(201).json({ message: 'Lead status master created successfully', lead_status_masters })
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error', error })
    }
}
exports.All_lead_status_master = async (req, res) => {
    try {
        const all_lead_status_masters = await lead_status_master.findAll({ include: [{ model: login, attributes: ['name'] }] })
        if (all_lead_status_masters.length === 0) {
            return res.status(404).json({ message: 'No lead status masters found' })
        }
        return res.status(200).json({ message: 'All lead status masters', all_lead_status_masters })
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error', error })
    }
}
exports.Lead_status_master_by_id = async (req, res) => {
    try {
        const { id } = req.params
        if (!id) {
            return res.status(400).json({ message: 'id is required' })
        }
        const lead_status_masters = await lead_status_master.findOne({
            where: { id }
        })
        if (!lead_status_master) {
            return res.status(404).json({ message: 'Lead status master not found' })
        }
        return res.status(200).json({ message: 'Lead status master', lead_status_masters })
    } catch (error) {

        console.log(error)
        return res.status(500).json({ message: 'Internal server error', error })
    }
}
exports.Update_lead_status_master = async (req, res) => {
 try {
    const { id } = req.params
    const { status, color, user_id } = req.body

    if (!id) {
        return res.status(400).json({ message: 'id is required' })
    }

    const leadStatusMaster = await lead_status_master.findOne({
        where: { id }
    })

    if (!leadStatusMaster) {
        return res.status(404).json({ message: 'Lead status master not found' })
    }

    // Update the instance directly
    await leadStatusMaster.update({
        status,
        color,
        user_id
    })

    return res.status(200).json({
        message: 'Lead status master updated successfully',
        data: leadStatusMaster
    })
} catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Internal server error', error })
}

}
exports.Delete_lead_status_master = async (req, res) => {
    try {
        const { id } = req.params
        if (!id) {
            return res.status(400).json({ message: 'id is required' })
        }
        const lead_status_masters = await lead_status_master.findOne({
            where: { id }
        })
        if (!lead_status_master) {
            return res.status(404).json({ message: 'Lead status master not found' })
        }
        await lead_status_master.destroy({where:{id}})
        return res.status(200).json({ message: 'Lead status master deleted successfully' })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal server error', error })
    }
}