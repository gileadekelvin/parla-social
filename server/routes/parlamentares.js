const express = require("express");
const router = express.Router();

const ParlmentarModel = require("../models/Parlamentar");

// @route  GET api/parlamentares/test
// @desc    Tests parlamentar route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Parlamentares Works!" }));

// @route  GET api/parlamentares/
// @desc    Returns all information about members of the Brazilian Congress
// @access  Public
router.get("/", (req, res) => {

  Parlamentar.find({}, { '_id': 0 }).then(parlamentares => {
    res.json(parlamentares);
  }).catch(err => {
    console.log(err);
    res.json({ error: err.message })
  });

});

module.exports = router;