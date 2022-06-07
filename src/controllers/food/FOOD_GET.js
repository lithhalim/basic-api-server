const {FOOD_MODEL}=require("../../connect_database/LITH_DATABASE");//USE SCHEMA CALLED USERME


module.exports=async(req,res)=>{
    const allpeople=await FOOD_MODEL.findAll()
    res.status(200)
    res.json(allpeople)

}