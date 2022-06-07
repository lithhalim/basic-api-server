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
    });

module.exports = CLOUTHES_MODEL;
