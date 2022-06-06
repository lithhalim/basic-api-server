const {  DataTypes } = require('sequelize');//IMPORT PROPERTY FOR SCHEMA 
const LITH_DATABASE=require("../connect_database/LITH_DATABASE");//IMPORT DATABASE FOR SCEMA DEFINE



//CREATE THE SCHEMA AND CONNECTED WITH SPECIFIC DATABASE
const FOOD_MODEL = LITH_DATABASE.define('osamas', {//CREATE THE TABLE
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,//DATA TYPE OF COLUMN
    },
    age: {
      type: DataTypes.STRING
    }
    
  },{
    timestamps:false // *TIMESTAMP*USE TO CREATE CREATEDAT UPDATED AD TIME WHEN YOU DOING
  });

module.exports=FOOD_MODEL
  