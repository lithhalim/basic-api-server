const {FOOD_MODEL}=require("../../connect_database/LITH_DATABASE");//USE SCHEMA CALLED USERME

module.exports=async(req,res)=>{
    const id=(parseInt(req.params.id))
    await FOOD_MODEL.destroy({
        where:{
            id
        }
    })
    res.status(204)
    res.send("delete")

}