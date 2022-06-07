const {CLOUTHES_MODEL}=require("../../connect_database/LITH_DATABASE")
module.exports=async function deleteClothes(req, res) {
    let clothes_id = parseInt(req.params.id);
    let deleteClothes = await CLOUTHES_MODEL.destroy({ where: { id: clothes_id} });
    res.status(204).json(deleteClothes); 
}
