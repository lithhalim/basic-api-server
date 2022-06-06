const PEOPLE_MODEL=require("../../modul/PEOPLE_MODEL");//USE SCHEMA CALLED USERME


module.exports=async(req,res)=>{
    const allpeople=await PEOPLE_MODEL.findAll()
    res.status(200)
    res.json(allpeople)

}