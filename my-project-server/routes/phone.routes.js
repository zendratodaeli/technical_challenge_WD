const router = require("express").Router();
const phoneList = require("../data/phones.json");


router.get("/phones", (req, res, next) => {
res.send(phoneList);
});

router.get("/phones/:id", (req, res, next) => {
  const {id} = req.params

  console.log(id)
  const phoneId = phoneList.find((element) => element.id.toString() === id.toString());
  res.json(phoneId);
  console.log(phoneId)

  
});

module.exports = router;