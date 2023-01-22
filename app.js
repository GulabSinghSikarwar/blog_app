
const express =require('express')
const app=express()
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
app.use(cookieParser())

const jsonParser = bodyParser.json();

app.use(cors({
    origin: '*',

}))
app.use(jsonParser)


app.use('/',(err,req,resp)=>{

    resp.json({
        status : "error",
        error_status:err.status,
        message :err.message 
    })
})

const PORT=process.env.PORT||5000;

app.listen(PORT,()=>{
    console.log(`server running on port : ${PORT} `);
})