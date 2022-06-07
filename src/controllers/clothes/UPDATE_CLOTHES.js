const {CLOUTHES_MODEL}=require("../../connect_database/LITH_DATABASE")
module.exports=async function updateClothes(req, res) {
    let clothesId=parseInt(req.params.id);
    let updateClothes=req.body;
    let valueupdate=await CLOUTHES_MODEL.update(clothesId,updateClothes)
    res.status(201)
    res.json(valueupdate)    

}