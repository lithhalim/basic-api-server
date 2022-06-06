const express = require('express');
const router=express.Router();//USE ROUTER FOR THESE PAGE


//ALL FUNCTION FOR PEOPLE MIDDULER
const updatepeople=require("../controllers/people/PEOPLE_UPDATE")
const getAllPeople=require("../controllers/people/PEOPLE_GET")
const createnewpeople=require("../controllers/people/PEOPLE_CREATE")
const deletepeople=require("../controllers/people/PEOPLE_DELETE")



//ALL ROUTE FOR POEPLE ELEMENT
router.get('/people',getAllPeople)
router.post('/people',createnewpeople)
router.put("/people/:id",updatepeople)
router.delete("/people/:id",deletepeople)

module.exports=router;
