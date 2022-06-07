'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const {LITH_DATABASE}=require("../connect_database/LITH_DATABASE")


//ALL MIDDELWARE ROUTES I USE
const FOOD_ROUTES=require("../routes/FOOD_ROUTES")
const CLOUTHES_ROUTER=require("../routes/CLOTHES_ROUTES")
//IMPORT HANDELLER 
const pageNotFound=require("../handeller/404");
const errorHaandeler=require("../handeller/500")


//USE STATMENT 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())//USE TO ACCEPT JSON FILE ARE REQUESTET


//USER EXPRESS ROUTER MIDDELWARE ROUTES
app.use('/api/v1',FOOD_ROUTES)//USE THE ROUTE FOR PEOPLE FOR ALL PROJECT ROUTE
app.use("/api/v1",CLOUTHES_ROUTER)//USE ROUTE FOR CLOTHES FOR ALL PROJECT
  

//ALL ROUTE ELEMENT
app.get('/home', (req, res) => {
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
