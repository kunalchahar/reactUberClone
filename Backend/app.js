const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');
const expresss = require('express');
const connectToDb = require('./db/db');

connectToDb();

const app = expresss();
app.use(cors());



app.get('/',(req,res)=>{
    res.send('Hello World hello')
});


module.exports = app;