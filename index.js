const express=require('express');
const connectDB=require('./config/db');
const app=express();
connectDB();
app.use(express.json());
//Define routes
app.use('/',require('./routes/index'));
app.use('/api/url',require('./routes/url'));
const port=5000;     
app.listen(port,()=>{  
    console.log(`server listening on ${port}`);
})    