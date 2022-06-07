const {FOOD_MODEL}=require("../../connect_database/LITH_DATABASE");//USE SCHEMA CALLED USERME

module.exports=async(req,res)=>{
    const custmerid=(parseInt(req.params.id))
    let ddeletCustmer=await FOOD_MODEL.delete(custmerid)
    res.status(204)
    res.send("sucsses")

}