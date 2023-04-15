const express = require('express');
const connectdb = require('./config/dbConnection');
const errorHandler = require('./Routes/controllers/middleware/errorHandler');
const dotenv =require('dotenv').config();
const port=process.env.PORT || 5000;

connectdb();

const app = express();

app.use(express.json());

app.use('/api/contacts' ,require("./Routes/ContactRoutes")) ;

app.use(errorHandler);

app.listen(port,()=>{
    console.log(`server is listening on ${port}`);
})
 