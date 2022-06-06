const PEOPLE_MODEL=require("../../modul/PEOPLE_MODEL");//SPECIFIC SCHEMA 

module.exports=async(req,res)=>{
    const id=req.params.id;
    const {name,age}=req.body;
    const updatepeople=await PEOPLE_MODEL.findByPK(id);
    UserMe.name=name;
    UserMe.age=age;
    await UserMe.save();
    res.status(201)
    res.send("updatedone")
}