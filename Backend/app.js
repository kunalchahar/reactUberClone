const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');
const expresss = require('express');

const app = expresss();
app.use(cors());



app.get('/',(req,res)=>{
    res.send('Hello World')
});


module.exports = app;