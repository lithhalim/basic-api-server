
const {CLOUTHES_MODEL}=require("../../connect_database/LITH_DATABASE")
module.exports=async function createClothes(req, res) {
    let newClothes = req.body;
    let person = await CLOUTHES_MODEL.create(newClothes);
    res.status(201).json(person);
}