const { config } = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;

//concect to mongdb atlas
mongoose
    .connect(
        process.env.MONGO_URL,
        {useNewUrlParser:true}
    )
    .then(() => {
    console.log("Connected to mongodb atlas");
}).catch(error =>{
    console.log("Something wring happened",error);
})

//strat sever   
app.listen(PORT, () => {
    console.log("Sever started at PORT ", PORT);
});