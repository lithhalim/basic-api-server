const {FOOD_MODEL}=require("../../connect_database/LITH_DATABASE");//USE SCHEMA CALLED USERME

module.exports=async(req,res)=>{
    const id=req.params.id;
    const {name,type}=req.body;
    await FOOD_MODEL.update({
        name:name,
        type:type
    },{
        where:{
            id:parseInt(id)
        }
    })

    res.status(201)
    res.send("updatedone")
}