"use strict";
const express = require("express");
//USE THE ROUTER FOR THESE SECTION
const ClothesRouter = express.Router();

//IMPORT FUNCTION FROM CONTROLLERS
const getClothes=require("../controllers/clothes/GETALLCLOTHES")
const getOneClothes=require("../controllers/clothes/GETALLCLOTHES")
const createClothes=require("../controllers/clothes/CREATE_CLOUTHES")
const updateClothes=require("../controllers/clothes/UPDATE_CLOTHES")
const deleteClothes=require("../controllers/clothes/DELETE_CLOTHES")


//DEFINE THE ROUTER I HAVET
ClothesRouter.get("/clothes", getClothes);
ClothesRouter.get("/clothes/:id", getOneClothes);
ClothesRouter.post("/clothes", createClothes);
ClothesRouter.put("/clothes/:id", updateClothes);
ClothesRouter.delete("/clothes/:id", deleteClothes);


module.exports = ClothesRouter;
