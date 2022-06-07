const {FOOD_MODEL}=require("../../connect_database/LITH_DATABASE");//USE SCHEMA CALLED USERME


module.exports=async(req,res)=>{
    let id=req.params.id
    let allFood=await FOOD_MODEL.reade(id);
    res.status(200)
    res.json(allFood)

}