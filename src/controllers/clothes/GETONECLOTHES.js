const {CLOUTHES_MODEL}=require("../../connect_database/LITH_DATABASE")
module.exports=async function getOneClothes(req, res) {
    let id=req.params.id
    let oneClothes=await CLOUTHES_MODEL.reade(id);
    res.status(200)
    res.json(oneClothes)

}
