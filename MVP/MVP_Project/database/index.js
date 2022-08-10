const mongoose = require("mongoose");

//connect with mongoose to server
mongoose.connect("mongodb://localhost/react-native", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const recipeSchema = new mongoose.Schema(
  {
    username: String,
    name: String,
    description: String,
    ingredients: [String],
    steps: [String],
    image: String,
    date: Date,
  },
  { timestamps: true } // will automatically create and set `createdAt` and `updatedAt` timestamps
);

let Recipe = new mongoose.model("Recipe", recipeSchema); //  TODO: Fill in arguments!

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  savedRecipes: [{}],
  following: [String],
});

let userRecipe = mongoose.model("User", userSchema);

module.exports = {
  createUser: function (data) {
    return new Promise((resolve, reject) => {
      var newUser = new userRecipe({
        username: data.name,
        password: data.password,
        following: data.name,
      });

      newUser.save((err) => {
        if (err) {
          reject(err);
        } else {
          resolve("saved!");
        }
      });
    });
  },

  createRecipe: function (data) {
    return new Promise((resolve, reject) => {
      var newRecipe = new Recipe({
        username: data.username,
        name: data.name,
        description: data.description,
        ingredients: data.ingredients,
        steps: data.steps,
        image: data.url,
        date: data.date,
      });

      newRecipe.save((err) => {
        if (err) {
          reject(err);
        } else {
          resolve("recipe saved!");
        }
      });
    });
  },

  getAllRecipes1: function (data) {
    return new Promise((resolve, reject) => {
      userRecipe.find().exec((err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  },

  getAllRecipes2: function (data) {
    // console.log("2222 got in here");
    return Recipe.find({ username: data.username });
  },

  getRecipe: function (person) {
    return Recipe.find({ username: person });
  },

  getData: function (data) {
    return new Promise((resolve, reject) => {
      userRecipe.find({ username: data }).exec((err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  },

  addImage: function (data) {
    return new Promise((resolve, reject) => {
      Recipe.updateOne({ _id: data.id }, { $set: { image: data.image } }).exec(
        (err) => {
          if (err) {
            reject(err);
          } else {
            resolve("added image");
          }
        }
      );
    });
  },

  getOwnRecipe: function (data) {
    return new Promise((resolve, reject) => {
      Recipe.find({ username: data }).exec((err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  },

  saveRecipe: function (data) {
    return new Promise((resolve, reject) => {
      Recipe.find({ _id: data.id }).exec((err, recipessss) => {
        if (err) {
          reject(err);
        } else {
          console.log("WAHT IS THE RECIPE:", recipessss);
          userRecipe
            .updateOne(
              { username: data.username },
              { $push: { savedRecipes: recipessss[0] } }
            )
            .exec((err) => {
              if (err) {
                reject(err);
              } else {
                userRecipe
                  .find({ username: data.username })
                  .exec((err, data) => {
                    // console.log("I GOT IN THE FIND: ", data);
                    if (err) {
                      reject(err);
                    } else {
                      resolve(data);
                    }
                  });
              }
            });
        }
      });
    });
  },
  addFollowing: function (data) {
    return new Promise((resolve, reject) => {
      userRecipe
        .updateMany(
          { username: data.username },
          { $push: { following: data.following } }
        )
        .exec((err) => {
          if (err) {
            reject(err);
          } else {
            resolve("updated!");
          }
        });
    });
  },

  deleteSavedRecipe: function (data) {
    return new Promise((resolve, reject) => {
      userRecipe
        .updateOne(
          { username: data.username },
          { $pull: { savedRecipes: { name: data.name } } }
        )
        .exec((err) => {
          if (err) {
            reject(err);
          } else {
            resolve("deleted");
          }
        });
    });
  },

  deleteFollowing: function (data) {
    return new Promise((resolve, reject) => {
      userRecipe
        .updateOne(
          { username: data.username },
          { $pull: { following: data.name } }
        )
        .exec((err) => {
          if (err) {
            reject(err);
          } else {
            resolve("deleted");
          }
        });
    });
  },
};
