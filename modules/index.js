const Login = require('./login');        // better: rename file to Login.js
const Company = require('./companies');
const Contact = require('./contactus');
const Lead = require('./leads');
const Followup = require('./followups'); // make sure you have this model
const lead_status_master=require('./lead_status_master')
const lead_source=require('./lead_source');
const team_members = require('./team_members');
const activities = require('./activities');

/* =========================
   Login → Companies
========================= */
Login.hasMany(Company, {
    foreignKey: 'owner_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
Company.belongsTo(Login, {
    foreignKey: 'owner_id'
});

/* =========================
   Login → Contacts
========================= */
Login.hasMany(Contact, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
Contact.belongsTo(Login, {
    foreignKey: 'user_id'
});

/* =========================
   Login → Leads
========================= */
Login.hasMany(Lead, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
Lead.belongsTo(Login, {
    foreignKey: 'user_id'
});

/* =========================
   Contact → Leads
========================= */
Contact.hasMany(Lead, {
    foreignKey: 'contact_id'
});
Lead.belongsTo(Contact, {
    foreignKey: 'contact_id'
});

/* =========================
   Lead → Followups
========================= */
Lead.hasMany(Followup, {
    foreignKey: 'lead_id',
    onDelete: 'CASCADE'
});
Followup.belongsTo(Lead, {
    foreignKey: 'lead_id'
});

// /* Optional (Recommended) */
Login.hasMany(Followup, {
    foreignKey: 'user_id'
});
Followup.belongsTo(Login, {
    foreignKey: 'user_id'
});

/* =========================
   Login → Lead Status Master
========================= */
Login.hasMany(lead_status_master, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
lead_status_master.belongsTo(Login, {
    foreignKey: 'user_id'
});

/* =========================
   Login → Lead Source
========================= */
Login.hasMany(lead_source, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
lead_source.belongsTo(Login, {
    foreignKey: 'user_id'
});
team_members.belongsTo(Login, {
    foreignKey: 'user_id'
});
Login.hasMany(team_members, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
activities.belongsTo(Login,{
    foreignKey:'user_id',
    onDelete:'CASCADE',
    onUpdate:'CASCADE'
})
Login.hasMany(activities,{
    foreignKey:'user_id',
    onDelete:'CASCADE',
    onUpdate:'CASCADE'
})
module.exports = {
    Login,
    Company,
    Contact,
    Lead,
    Followup
};