const {CLOUTHES_MODEL}=require("../../connect_database/LITH_DATABASE")

module.exports=async function getClothes(req, res) {
    const allClothes = await CLOUTHES_MODEL.findAll();
    res.status(200).json(allClothes);
}