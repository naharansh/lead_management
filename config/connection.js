const { Sequelize } = require('sequelize')
const dotenv = require('dotenv').config({ path: './config.env' })

const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USER,
    process.env.DB_PASSWORD, // ← must be a string
    {
        host: process.env.DB_HOST,
        dialect: 'postgres',
    }
);
s
module.exports=sequelize