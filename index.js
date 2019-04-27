const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const keys = require("./config/keys");
//initialize
const app=express();


//configure express to parse json
app.use(express.json());


//connect to mongoDB

mongooose.connect(keys.mongoURI, {
	useNewurlPaarser:true,
	useCreateIndex:true,
})
.then(onfullfilled()   =>{
console.log ("mongoDBconnected");
})
.catch(onrejected err => console.log(err));

//setup PORT
const port =pprocess.env.PORT 
app.listen(port, ()=> {
	console.log('server running')
})
