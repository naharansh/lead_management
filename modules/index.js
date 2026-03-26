const User = require('./login');        // better: rename file to user.js
const Company = require('./companies');
const Contact = require('./contactus');
const Lead = require('./leads');
const Followup = require('./followups'); // make sure you have this model
const lead_status_master=require('./lead_status_master')
const lead_source=require('./lead_source');
const team_members = require('./team_members');
const activities = require('./activities');

/* =========================
   User → Companies
========================= */
User.hasMany(Company, {
    foreignKey: 'owner_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
Company.belongsTo(User, {
    foreignKey: 'owner_id'
});

/* =========================
   User → Contacts
========================= */
User.hasMany(Contact, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
Contact.belongsTo(User, {
    foreignKey: 'user_id'
});

/* =========================
   User → Leads
========================= */
User.hasMany(Lead, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
Lead.belongsTo(User, {
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
User.hasMany(Followup, {
    foreignKey: 'user_id'
});
Followup.belongsTo(User, {
    foreignKey: 'user_id'
});

/* =========================
   User → Lead Status Master
========================= */
User.hasMany(lead_status_master, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
lead_status_master.belongsTo(User, {
    foreignKey: 'user_id'
});

/* =========================
   User → Lead Source
========================= */
User.hasMany(lead_source, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
lead_source.belongsTo(User, {
    foreignKey: 'user_id'
});
team_members.belongsTo(User, {
    foreignKey: 'user_id'
});
User.hasMany(team_members, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
activities.belongsTo(User,{
    foreignKey:'user_id',
    onDelete:'CASCADE',
    onUpdate:'CASCADE'
})
User.hasMany(activities,{
    foreignKey:'user_id',
    onDelete:'CASCADE',
    onUpdate:'CASCADE'
})
module.exports = {
    User,
    Company,
    Contact,
    Lead,
    Followup
};