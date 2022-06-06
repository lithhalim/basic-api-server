const express = require('express');
const router=express.Router();//USE ROUTER FOR THESE PAGE


//ALL FUNCTION FOR PEOPLE MIDDULER
const updatepeople=require("../controllers/food/FOOD_UPDATE")
const getAllPeople=require("../controllers/food/FOOD_GET")
const createnewpeople=require("../controllers/food/FOOD_CREATE")
const deletepeople=require("../controllers/food/FOOD_DELETE")
const getone=require("../controllers/food/FOOD_SELECTONE")


//ALL ROUTE FOR POEPLE ELEMENT
router.get('/food',getAllPeople)
router.get('/food/:id',getone)
router.post('/food',createnewpeople)
router.put("/food/:id",updatepeople)
router.delete("/food/:id",deletepeople)

module.exports=router;
