const { Login } = require('../modules')
const companies = require('../modules/companies')

exports.createCompanies = async (req, res) => {
    try {
        const { name, owner_id } = req.body
        if (!name || !owner_id) {
            return res.status(400).json({ message: 'fields are required' })
        }
        const new_company = await companies.create({
            name,
            owner_id
        })
        return res.status(201).json({ message: 'company created successfully', new_company })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'internal server error' })
    }
}
exports.All_companies = async (req, res) => {
    try {
        const all_companies = await companies.findAll({
            include: [{ model: Login }]
        });

        if (all_companies.length === 0) {
            return res.status(404).json({ message: 'no companies found' });
        }

        return res.status(200).json({ message: 'companies found successfully', all_companies });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'internal server error' });
    }
};
exports.company_by_id = async (req, res) => {
    try {
        const { id } = req.params
        if (!id) {
            return res.status(400).json({ message: 'id is required' })
        }
        const company = await companies.findOne({ where: { id }, include: [{ model: Login }] })
        if (!company) {
            return res.status(404).json({ message: 'company not found' })
        }
        return res.status(200).json({ message: 'company found successfully', company })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'internal server error' })
    }
}
exports.Update_by_id = async (req, res) => {
    try {
        const { id } = req.params
        const { name} = req.body
        if (!id) {
            return res.status(400).json({ message: 'id is required' })
        }
        const company = await companies.findOne({ where: { id } })
        if (!company) {
            return res.status(404).json({ message: 'company not found' })
        }
        company.name = name
        await company.save()
        return res.status(200).json({ message: 'company updated successfully', company })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'internal server error' })
    }
}
exports.Delete_by_id = async (req, res) => {
    try {
        const { id } = req.params
        if (!id) {
            return res.status(400), json({ message: 'id is not found' })
        }
        const delete_id = await companies.destroy({ where: { id } })
        if (!delete_id) {
            return res.status(404).json({ message: 'company not found' })
        }
        return res.status(200).json({ message: 'company deleted successfully', delete_id })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'internal server error' })
    }
}