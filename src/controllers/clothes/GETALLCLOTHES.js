const {CLOUTHES_MODEL}=require("../../connect_database/LITH_DATABASE")

module.exports=async function getClothes(req, res) {
    let custmor=await CLOUTHES_MODEL.reade();
    res.status(200).json(custmor);
}