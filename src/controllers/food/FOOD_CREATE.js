const {FOOD_MODEL}=require("../../connect_database/LITH_DATABASE");//USE SCHEMA CALLED USERME

module.exports=async(req,res)=>{
    const {name,type}=req.body
    await FOOD_MODEL.create({
        name,
        type
    })
    res.status(201)
    res.send("sucsses")
}