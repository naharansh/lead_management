const sequelize=require('../config/connection')
const {DataTypes}=require('sequelize')
const lead_status_master=sequelize.define('lead_status_master',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    status:{
        type:DataTypes.ENUM('new','Interested','CLosed'),
        allowNull:false,
    },
    user_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    color:{
        type:DataTypes.STRING,
    }
})
module.exports=lead_status_master