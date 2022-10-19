function checkRequrestBodyForEditWarehouse(req){
    const isValid =
      req.body &&
      req.body.id &&
      req.body.name &&
      req.body.address &&
      req.body.city &&
      req.body.country &&
      req.body.contact.name &&
      req.body.contact.position &&
      req.body.contact.phone &&
      req.body.contact.email;
      return isValid
}
module.exports = checkRequrestBodyForEditWarehouse