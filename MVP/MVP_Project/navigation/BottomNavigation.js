import React, { useState, useEffect } from "react";
import { Text, View, Image, StyleSheet, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "../bottom_containers/HomePage.js";
import GetInspired from "../bottom_containers/GetInspired.js";
import Saved from "../bottom_containers/Saved.js";
import Profile from "../bottom_containers/Profile.js";
import axios from "axios";
import parse from "../refactor/parse.js";
import UsersProfile from "../components/UsersProfile.js";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function BottomNavigation({ route }) {
  // console.log("WHAT IS THE ROUTE: ", route.params.username);
  const [homePage, setHomePage] = useState("");
  const [inspired, setInspired] = useState("");
  const [saved, setSaved] = useState("");
  const [profile, setProfile] = useState("");
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);

  var pictures = {
    "Chef John":
      "/Users/louisayonzon/hackReactor/MVP/fromScratch/MVP/MVP_Project/assets/grandpa.jpg",
    "Sam the Cooking Guy":
      "/Users/louisayonzon/hackReactor/MVP/fromScratch/MVP/MVP_Project/assets/papa2.jpg",
    "Martha Stewart":
      "/Users/louisayonzon/hackReactor/MVP/fromScratch/MVP/MVP_Project/assets/grandma.jpg",
  };

  var pictureAndColor = {
    "Chef John": {
      url: "/Users/louisayonzon/hackReactor/MVP/fromScratch/MVP/MVP_Project/assets/grandpa.jpg",
      color: "#dfc1ff",
    },
    "Sam the Cooking Guy": {
      url: "/Users/louisayonzon/hackReactor/MVP/fromScratch/MVP/MVP_Project/assets/papa2.jpg",
      color: "#96cefaf0",
    },
    "Martha Stewart": {
      url: "/Users/louisayonzon/hackReactor/MVP/fromScratch/MVP/MVP_Project/assets/grandma.jpg",
      color: "#9bebff",
    },
    Louisaflor: {
      url: "https://static.wikia.nocookie.net/cookingmama/images/c/c5/Web_mama_mobile.gif/revision/latest?cb=20110131043700",
      color: "#fec3e5",
    },
  };

  useEffect(() => {
    //${route.params.username}
    axios
      .get(`http://localhost:3000/recipe?user=${route.params.username}`)
      .then((data) => {
        // getting info based off the username and saved recipes
        axios
          .put(`http://localhost:3000/ownRecipe`, {
            username: route.params.username,
          })
          .then((ownRecipe) => {
            //getting all the recipes user made
            // console.log(
            //   "DID WE GET ANYTHING IN THE RECIPE----------------------dfklfjdskljfklsdklas----: ",
            //   ownRecipe.data
            // );
            axios
              .get(`http://localhost:3000/allRecipes`)
              .then((allRecipes) => {
                //getting array of all recipes (organized)

                setTimeout(() => {
                  setHomePage(data.data.sortByDate); //array of recipes based off who i follow
                  setSaved(data.data.me[0]); //array of data of basic info about me (including saved items)
                  setLoading(false);
                  setProfile(ownRecipe.data); //getting all the recipes the user made
                  setInspired(allRecipes.data); //getting array of all recipes (organized)
                }, 1000);

                //add all reciped for the get inspired
              })
              .catch((err) => {
                console.log("ERROR WHEN GETTING ALL RECIPES: ", err);
              });
          })
          // console.log("WHAT IS DATA..: ", data.data);
          .catch((err) => {
            console.log("ERROR WHEN GETTING OWN RECIPE: ", err);
          });
      })
      .catch((err) => {
        console.log("ERR WHEN GETTING DATA: ", err);
      });
  }, []);

  const postRecipe = (data) => {
    // console.log("GOT THE DATA IN THE POST: ", data);
    var changeData = parse(data);
    changeData["username"] = route.params.username;
    console.log("DID MT CHANGE DATA WORKSEDFD: ", changeData);
    // axios
    //   .post(`http://localhost:3000/recipe`, changeData)
    //   .then((data) => {
    //     getRequest();
    //   })
    //   .catch((err) => {
    //     console.log("ERROR WHEN POSTING NEW RECIPE", err);
    //   });
  };

  const getRequest = () => {
    // console.log("went in here!");
    axios
      .get(`http://localhost:3000/recipe?user=${route.params.username}`)
      .then((data) => {
        axios
          .put(`http://localhost:3000/ownRecipe`, {
            username: route.params.username,
          })
          .then((ownRecipe) => {
            // console.log(
            //   "DID WE GET ANYTHING IN THE RECIPE----------------------dfklfjdskljfklsdklas----: ",
            //   ownRecipe.data
            // );
            setHomePage(data.data.sortByDate);
            setSaved(data.data.me[0]);
            setLoading(false);
            setProfile(ownRecipe.data);
          })
          // console.log("WHAT IS DATA..: ", data.data);
          .catch((err) => {
            console.log("ERROR WHEN GETTING OWN RECIPE: ", err);
          });
      })
      .catch((err) => {
        console.log("ERR WHEN GETTING DATA: ", err);
      });
  };

  const removeFollower = (person) => {
    // console.log("GOT IN THE REMOVE FOLLOW USER FUNC: ", person);
    axios
      .put(`http://localhost:3000/deleteFollowing`, {
        username: route.params.username,
        name: person,
      })
      .then((data) => {
        getRequest();
      })
      .catch((err) => {
        console.log("ERR WHEN DELETING FOLLOWED PERSON: ", err);
      });
  };

  const followUser = (person) => {
    // console.log("GOT IN THE FOLLOW USER FUNC: ", person);
    axios
      .put(`http://localhost:3000/following`, {
        username: route.params.username,
        following: person,
      })
      .then((data) => {
        getRequest();
      })
      .catch((err) => {
        console.log("ERROR WHEN TRYING TO ADD FOLLOWING PERSON: ", err);
      });
  };

  const saveRecipe = (recipeId, title) => {
    Alert.alert(`Saved ${title}!`);
    console.log("WHAT IS THE ID: ", recipeId);
    // route.params.username -- NEED TO USE IT BASED OFF OF USERNAME
    axios
      .post(`http://localhost:3000/saveRecipe`, {
        id: recipeId,
        username: route.params.username,
      })
      .then((data) => {
        // var storeInfo = data.data[0]["savedRecipes"];
        // console.log(
        //   "WHAT IS THE DATA:--------------------------------------------------------- ",
        //   storeInfo
        // );
        // setSaved(storeInfo);
        getRequest();
      })
      .catch((err) => {
        console.log("ERR WHEN POSTING NEW RECIPE: ", err);
      });
  };

  const deleteRecipe = (nameOfRecipe) => {
    // route.params.username -- NEED TO USE IT BASED OFF OF USERNAME
    Alert.alert("Deleted recipe: ", nameOfRecipe);
    console.log("got in the delete recipe");
    axios
      .put(`http://localhost:3000/delete`, {
        name: nameOfRecipe,
        username: route.params.username,
      })
      .then((data) => {
        // console.log("WHAT IS THE DATA: ", data.data);
        getRequest();
      })
      .catch((err) => {
        console.log("ERR WHEN POSTING NEW RECIPE: ", err);
      });
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
          style={styles.logo}
          // source={require("../assets/MAMA_HAS_A_HAPPY.webp")}
          source={{
            uri: "https://static.wikia.nocookie.net/cookingmama/images/4/47/MAMA_HAS_A_HAPPY.gif/revision/latest?cb=20180910213033",
          }}
        />
        <Text>Loading</Text>
      </View>
    );
  }

  const UsersProfileNagivator = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerTintColor: "white",
          headerstyle: {
            backgroundColor: "transparent",
          },
          headerTransparent: true,
          headerTitle: "",
          headerLeftContainerStyle: {
            paddingLeft: 10,
            marginTop: 65,
          },
        }}
      >
        <Stack.Screen
          name="Get Inspired"
          children={() => (
            <GetInspired
              inspired={inspired}
              following={saved}
              followUser={followUser}
              removeFollower={removeFollower}
              pictures={pictureAndColor}
            />
          )}
        />
        <Stack.Screen name="Users Profile" component={UsersProfile} />
      </Stack.Navigator>
    );
  };
  //   const Tab = createBottomTabNavigator();
  // const Stack = createStackNavigator();

  if (!loading) {
    return (
      <NavigationContainer independent={true}>
        <Tab.Navigator
          initialRouteName="HomePage"
          screenOptions={{
            tabBarActiveTintColor: "#e91e63",
          }}
        >
          <Tab.Screen
            options={{
              tabBarIcon: () => (
                <Image
                  source={{
                    uri: "https://static.vecteezy.com/system/resources/previews/004/308/810/non_2x/peach-kawaii-fruit-with-a-smile-free-vector.jpg",
                  }}
                  style={{ width: 45, height: 40, borderRadius: 10 }}
                />
              ),
            }}
            name="Home Page"
            children={() => (
              <HomePage
                data={homePage}
                saveRecipe={saveRecipe}
                pictures={pictureAndColor}

                // navigation={navigation}
              />
            )}
          />

          <Tab.Screen
            options={{
              tabBarIcon: () => (
                <Image
                  source={{
                    uri: "https://image.pngaaa.com/250/115250-middle.png",
                  }}
                  style={{ width: 45, height: 40, borderRadius: 10 }}
                />
              ),
            }}
            name="Get Inspired"
            component={UsersProfileNagivator}
          />

          <Tab.Screen
            options={{
              tabBarIcon: () => (
                <Image
                  source={{
                    uri: "https://png.pngtree.com/png-clipart/20190920/original/pngtree-strawberry-icon-png-image_4626712.jpg",
                  }}
                  style={{ width: 45, height: 35, borderRadius: 10 }}
                />
              ),
            }}
            name="Saved"
            children={() => <Saved saved={saved} deleteRecipe={deleteRecipe} />}
          />

          <Tab.Screen
            options={{
              tabBarIcon: () => (
                <Image
                  source={{
                    uri: "https://png.pngtree.com/png-clipart/20200226/original/pngtree-kawaii-cute-apple-illustration-character-png-image_5325817.jpg",
                  }}
                  style={{ width: 45, height: 40, borderRadius: 10 }}
                />
              ),
            }}
            name="Profile"
            children={() => (
              <Profile
                pictureAndColor={pictureAndColor}
                profileData={profile}
                postRecipe={postRecipe}
                saved={saved}
              />
            )}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  safeView: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: "red",
  },
  logo: {
    width: 86,
    height: 78,
  },
});
