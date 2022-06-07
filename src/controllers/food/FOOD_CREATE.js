const {FOOD_MODEL}=require("../../connect_database/LITH_DATABASE");//USE SCHEMA CALLED USERME

module.exports=async(req,res)=>{
    let newFood=req.body;
    let valueNewFood=await FOOD_MODEL.create(newFood)
    res.status(201)
    res.json(valueNewFood)
}