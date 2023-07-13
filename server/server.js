const express = require('express');
const router = require('./routes/testRoutes');
const dotenv = require('dotenv')
const  colors   = require('colors')
const   morgan   = require('morgan')
const  cors  = require('cors');
const connectDB = require('./config/db');

dotenv.config();

connectDB();

const app = express()

app.use(cors());
app.use(morgan('dev '))
app.use(express.json())


app.use('/',router)
app.use('/api/v1/auth', require('../server/routes/authRoutes'))
app.use('/api/v1/inventory',require('../server/routes/inventoryRoutes'))
app.use('/api/v1/analytics',require('../server/routes/analyticsRoutes'))
app.use("/api/v1/admin", require("./routes/adminRoutes"));


const Port = process.env.PORT;
app.listen(Port,()=>{
    console.log(`server is running on ${Port} successfully`)
})  