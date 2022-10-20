function checkRequestBody(req) {
  const isValid =
    req.body &&
    req.body.id &&
    req.body.warehouseID &&
    req.body.warehouseName &&
    req.body.itemName &&
    req.body.description &&
    req.body.category &&
    req.body.status &&
    req.body.quantity;
  return isValid;
}
module.exports = checkRequestBody;
