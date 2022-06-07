const {FOOD_MODEL}=require("../../connect_database/LITH_DATABASE");//USE SCHEMA CALLED USERME

module.exports=async(req,res)=>{
    let foodId=parseInt(req.params.id);
    let updateFood=req.body;
    let valueupdate=await FOOD_MODEL.update(foodId,updateFood)
    res.status(201)
    res.json(valueupdate)    
} 