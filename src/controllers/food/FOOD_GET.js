const {FOOD_MODEL}=require("../../connect_database/LITH_DATABASE");//USE SCHEMA CALLED USERME


module.exports=async(req,res)=>{
    let custmor=await FOOD_MODEL.reade();
    res.status(200).json(custmor); }
