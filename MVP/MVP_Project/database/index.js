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
        image_id: data.url,
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

  saveRecipe: function (data) {},

  addFollowing: function (data) {},

  deleteSavedRecipe: function (data) {},
};
