const PEOPLE_MODEL=require("../../modul/PEOPLE_MODEL");//USE SCHEMA CALLED USERME

module.exports=async(req,res)=>{
    console.log(req.body)
    const {name,age}=req.body
    await PEOPLE_MODEL.create({
        name,
        age
    })
    res.status(201)
    res.send("sucsses")
}