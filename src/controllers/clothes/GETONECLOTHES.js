const {CLOUTHES_MODEL}=require("../../connect_database/LITH_DATABASE")
module.exports=async function getOneClothes(req, res) {
    const clothes_id = parseInt(req.params.id);
    let clothes = await CLOUTHES_MODEL.findOne({ where: { id: clothes_id } });
    res.status(200).json(clothes);
}
