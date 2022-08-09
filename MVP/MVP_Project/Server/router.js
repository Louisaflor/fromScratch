const express = require("express");
const path = require("path");
const app = express();
const router = express.Router();
const db = require("../database/index.js");

router.post("/user", (req, res) => {
  console.log("get request came in!");
  return db
    .createUser(req.body)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/recipe", (req, res) => {
  console.log("get request for recipe came in!");
  return db
    .createRecipe(req.body)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
