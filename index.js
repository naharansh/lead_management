const express=require("express");
const envs=require('dotenv').config({path:'./config/config.env'})
const app=express()
const connection=require('./config/connection')
const login_routes=require('./routes/login')
const companies_routes=require('./routes/companies')
const contactus_routes=require('./routes/contactus')
const leads_routes=require('./routes/leads')
const followup=require('./routes/followup')
const lead_master=require('./routes/lead_status_master')
const lead_source=require('./routes/lead_source')
const team_members=require('./routes/team_members')
const activites=require('./routes/activities')
app.use(express.json())

app.use('/api',login_routes)//login users
app.use('/api/company',companies_routes)
app.use('/api/contact',contactus_routes)
app.use('/api/lead',leads_routes)
app.use('/api/followup',followup)
app.use('/api/lead_master',lead_master)
app.use('/api/lead_source',lead_source)
app.use('/api/team_members',team_members)
app.use('/api/activites',activites)
connection.authenticate().then(()=>{
    console.log("database authenticated")
    connection.sync().then(()=>{
        console.log("database synced")
    }).catch((err)=>{
        console.log(err)
    })
}).catch((err)=>{
    console.log(err)
})
app.listen(process.env.PORT,()=>{
    console.log("server started on port 3000")
})