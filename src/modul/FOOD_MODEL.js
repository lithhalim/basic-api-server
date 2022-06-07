"use strict";
//CREATE THE SCHEMA AND CONNECTED WITH SPECIFIC DATABASE
const FOOD_MODEL = (sequelize, DataTypes)=>sequelize.define('osamas', {//CREATE THE TABLE
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
  