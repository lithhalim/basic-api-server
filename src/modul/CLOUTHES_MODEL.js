"use strict";
const CLOUTHES_MODEL = (sequelize, DataTypes) =>
    sequelize.define("clothes", {
        clothesName: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        clothesPrice: {
            type: DataTypes.STRING 
        },
    });

module.exports = CLOUTHES_MODEL;
