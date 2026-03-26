const { DataTypes } = require('sequelize')
const sequelize=require('../config/connection')
const team_members=sequelize.define('team_members',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
    },

    role:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    user_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
    }
})
module.exports=team_members