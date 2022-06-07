"use strict";
require('dotenv').config();
//CONNECTION WITH DATABASE AND SELECT THE ENVIROMENT
const POSTGRES_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;
//REQUIRE THE SEQULIZE
const { Sequelize, DataTypes } = require("sequelize");
//IMPORT ALL MODEL I HAVE
const CLOUTHES_MODEL=require("../modul/CLOUTHES_MODEL")
const FOOD_MODEL=require("../modul/FOOD_MODEL")




//USE TO RUN THE DATABASE ON HEROKKU TO MAKE CONFIGRATION 
let sequelizeOptions =
    process.env.NODE_ENV === "production"
        ? {
            dialect: 'postgres',
            protocol: 'postgres',
            dialectOptions: {
                ssl :{require: true,rejectUnauthorized: false},
                native: true
            }
        } : {};

//CREATION THE DATABASE WILL USE ON PROGRAME
let LITH_DATABASE = new Sequelize(POSTGRES_URI, sequelizeOptions);

//BIUT IN CLASS HAVE CRUD EQUATION
const COLLECTION_ROUTE=require("../routes/collection/COLLECTION_ROUTE.js/COLLECTION_ROUTES")
//NOW CLOTHES AND FOOD HAVE THE MODEL CONSTRUCTORE
//NOW YOU CAN USE THE CLASS TO CREAT TABLE 
const CLOTHES_COLLECTION=new COLLECTION_ROUTE(CLOUTHES_MODEL(LITH_DATABASE, DataTypes)) 
const FOOD_COLLECTION=new COLLECTION_ROUTE(FOOD_MODEL(LITH_DATABASE, DataTypes)) 


//EXPORT ALL MODEL TO CAN USED EVERY WHERE
module.exports = {
    LITH_DATABASE: LITH_DATABASE,
    FOOD_MODEL:FOOD_COLLECTION ,
    CLOUTHES_MODEL:CLOTHES_COLLECTION
};


