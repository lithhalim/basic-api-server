const {CLOUTHES_MODEL}=require("../../connect_database/LITH_DATABASE")
module.exports=async function updateClothes(req, res) {
    let clothes_id = parseInt(req.params.id);
    let updateClothes = req.body;
    let foundClothes = await CLOUTHES_MODEL.findOne({ where: { id: clothes_id } });
    if (foundClothes) {

        let updatedClothes = await foundClothes.update(updateClothes);
        res.status(201).json(updatedClothes);
    } else {
        res.status(404);
    }
}