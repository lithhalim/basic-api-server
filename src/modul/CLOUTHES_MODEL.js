"use strict";
const CLOUTHES_MODEL = (sequelize, DataTypes) =>
    sequelize.define("clothes", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        price: {
            type: DataTypes.STRING 
        },
    }
    ,{
        timestamps:false // *TIMESTAMP*USE TO CREATE CREATEDAT UPDATED AD TIME WHEN YOU DOING
      });

module.exports = CLOUTHES_MODEL;
