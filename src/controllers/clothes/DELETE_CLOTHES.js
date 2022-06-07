const {CLOUTHES_MODEL}=require("../../connect_database/LITH_DATABASE")
module.exports=async function deleteClothes(req, res) {
    const custmerid=(parseInt(req.params.id))
    let ddeletCustmer=await CLOUTHES_MODEL.delete(custmerid)
    res.status(204)
    res.send("sucsses")

}
