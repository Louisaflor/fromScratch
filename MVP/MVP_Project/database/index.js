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
  savedRecipes: [{ String }],
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

  saveRecipe: function (data) {
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

  addFollowing: function (data) {
    return new Promise((resolve, reject) => {
      userRecipe
        .updateOne(
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

  deleteSavedRecipe: function (data) {},
};