
const express =require('express')
const app=express()
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cookieParser())

const jsonParser = bodyParser.json();

app.use(cors({
    origin: '*',

}))
app.use(jsonParser)

app.listen(3000,()=>{
    console.log("server started ");
})