"use strict";
const CLOUTHES_MODEL = (sequelize, DataTypes) =>
    sequelize.define("clothes", {
        clothes: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        price: {
            type: DataTypes.STRING 
        },
    });

module.exports = CLOUTHES_MODEL;
