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

//EXPORT ALL MODEL TO CAN USED EVERY WHERE
module.exports = {
    LITH_DATABASE: LITH_DATABASE,
    FOOD_MODEL: FOOD_MODEL(LITH_DATABASE, DataTypes),
    CLOUTHES_MODEL: CLOUTHES_MODEL(LITH_DATABASE, DataTypes)
};


