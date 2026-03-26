const sequelize=require('../config/connection')
const {DataTypes}=require('sequelize')
const login=sequelize.define('login',{
    id:{
        type:DataTypes.INTEGER, 
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false,
        validate:{
            isEmail:true
        }
    },
    company_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    phone:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            isNumeric:true,
            // len:[10,10]
        }
    },
    last_login:{
        type:DataTypes.DATE,
        allowNull:true
    },
    is_active:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:true
    }
})
module.exports=login