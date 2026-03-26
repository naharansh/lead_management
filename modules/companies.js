const sequelize=require('../config/connection')
const {DataTypes}=require('sequelize')
const companies=sequelize.define('companies',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:true,
            len:[3,50]
        }
    },
    owner_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        
    },
    
   
})
module.exports=companies;