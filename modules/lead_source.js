const sequelize=require('../config/connection')
const {DataTypes}=require('sequelize')
const lead_source=sequelize.define('lead_source',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    source:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    user_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
    }
})
module.exports=lead_source