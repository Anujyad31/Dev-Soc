const express= require('express');
const connectDB = require('./config/db')

const app=express();
connectDB();


const PORT=process.env.PORT||5000;

app.get('/', (req, res) => {
    res.send('Hello World!')
  })



app.listen(PORT,()=>{console.log(`server listening at port ${PORT}`)})