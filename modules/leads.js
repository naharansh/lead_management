const sequelize=require('../config/connection')
const {DataTypes}=require('sequelize')
const leads=sequelize.define('leads',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
        
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    source:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    status:{
        type:DataTypes.STRING,
        defaultValue:'new',
        allowNull:false,
    },
    priority:{
        type:DataTypes.ENUM('low','medium','high'),
        defaultValue:'medium',
        allowNull:false,
    },
    note:{
        type:DataTypes.TEXT,
    },
    assigned_to:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    user_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    contact_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
    }    
})
module.exports=leads
