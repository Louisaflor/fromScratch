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
      res.send(err);
    });
});

router.get("/recipe", (req, res) => {
  // console.log("get request for recipe came in! ", req.query.user);
  return db
    .getData(req.query.user)
    .then((response) => {
      // console.log("WHAT IS THIS: ", response);
      return Promise.all(
        response[0].following.map((person) => {
          return db.getRecipe(person);
        })
      )
        .then((data) => {
          var sortByDate = data.flat().sort((a, b) => {
            return b.createdAt - a.createdAt;
          });
          var together = {
            me: response,
            sortByDate: sortByDate,
          };
          // console.log("WHAAT IS SORTED DATESS ARR: ", sortByDate);
          res.send(together);
          // var obj = {};
          // response[0].following.map((person, index) => {
          //   obj[person] = data[index];
          // });
          // console.log("WHAT WAS IN PROMISE ALL obj date: ", obj);
          // res.send(obj);
        })
        .catch((err) => {
          console.log("ERR IN PROMISE ALL: ", err);
          res.send(err);
        });

      // res.send(response);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

router.get("/allRecipes", (req, res) => {
  return db
    .getAllRecipes1()
    .then((data) => {
      // console.log("WAHT IS THE DATA IN HERE: ", data);
      //sorting the recipes by username
      return Promise.all(
        data.map((item) => {
          return db.getAllRecipes2(item);
        })
      )
        .then((data2) => {
          // console.log("TEH DATA FOR THE PART 2 CAME IN: ", data2);
          res.send(data2);
        })
        .catch((err) => {
          console.log("ERROR WHEN ORGANIZING: ", err);
        });
      // res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.post("/recipe", (req, res) => {
  return db
    .createRecipe(req.body)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/saveRecipe", (req, res) => {
  return db
    .saveRecipe(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

//getting all recipes the user made
router.put("/ownRecipe", (req, res) => {
  return db
    .getOwnRecipe(req.body.username)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.put("/following", (req, res) => {
  // console.log("GOT IN PUT: ", req.body);
  return db
    .addFollowing(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.put("/image", (req, res) => {
  return db
    .addImage(req.body)
    .then((res) => {
      // console.log("GOT IT GOOD IN IMAGE");
      res.send(res);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.put("/delete", (req, res) => {
  return db
    .deleteSavedRecipe(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.put("/deleteFollowing", (req, res) => {
  return db
    .deleteFollowing(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
