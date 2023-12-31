const express = require('express');
const app = express();
const signupRouter = require('./signup/signup.routes')
const signinRouter = require('./signin/signin.routes')
//const db = require('./db')

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = 8080
app.use('/signup', signupRouter)
app.use('/signin', signinRouter)
//app.use('/', db.findUser(''))
app.listen(process.env.PORT || port, ()=>{console.log("server is runnig on port 8080");})