const {FOOD_MODEL}=require("../../connect_database/LITH_DATABASE");//USE SCHEMA CALLED USERME


module.exports=async(req,res)=>{
    let id=req.params.id
    const oneFood=await FOOD_MODEL.findAll({
        where:{
            id:parseInt(id)
        }
    })
    res.status(200)
    res.json(oneFood)

}