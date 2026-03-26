const sequelize = require('../config/connection')
const { DataTypes } = require('sequelize')
const followups = sequelize.define('followups', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    lead_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    followup_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    next_followup_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    followup_status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    remarks: {
        type: DataTypes.TEXT,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
},{
    // followups.js
indexes: [
  {
    unique: true,
    name: 'followups_unique_followup_per_lead',
    fields: ['user_id', 'lead_id']
  }
]
})
module.exports = followups