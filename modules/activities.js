const { DataTypes } = require('sequelize')
const sequelize=require('../config/connection')
const activities=sequelize.define('activities',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    user_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    action:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    lead_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    
})
module.exports=activities