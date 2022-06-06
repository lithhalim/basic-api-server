'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const LITH_DATABASE=require("../connect_database/LITH_DATABASE")

const PEOPLE_ROUTE=require("../routes/PEOPLE_ROUTE")

//IMPORT HANDELLER 
const pageNotFound=require("../handeller/404");
const errorHaandeler=require("../handeller/500")


//USE STATMENT 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())//USE TO ACCEPT JSON FILE ARE REQUESTET


//USER EXPRESS ROUTER 
app.use('/project',PEOPLE_ROUTE)//USE THE ROUTE FOR PEOPLE FOR ALL PROJECT ROUTE

  

//ALL ROUTE ELEMENT
app.get('/', (req, res) => {
    res.send('Hello World!')
}
)
  


//USE THE HANNDELER MUST BE IN THE END
app.use(pageNotFound);
app.use(errorHaandeler);




async function start(PORT){// WHE MUST RUN DATABASE CONNECTION BEFORE LISTEN TO SERVER
    try{
        await LITH_DATABASE.authenticate();//TO CONNECT WITH DATABASE
        await LITH_DATABASE.sync();//TO ADD ANY CHANGE TO DATABASE
        console.log('Connection has been established successfully.');//CHECK THE CONNECTIOIN WITH DATABASE
        app.listen(PORT ,()=>{
        console.log(`i'm listening on port ${PORT}`);
        })     
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}    

module.exports ={
    app: app,
    start: start,
}
