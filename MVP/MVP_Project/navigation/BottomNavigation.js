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

  useEffect(() => {
    //${route.params.username}
    axios
      .get(`http://localhost:3000/recipe?user=Louisaflor`)
      .then((data) => {
        axios
          .get(`http://localhost:3000/ownRecipe?user=Louisaflor`)
          .then((ownRecipe) => {
            // console.log(
            //   "DID WE GET ANYTHING IN THE RECIPE----------------------dfklfjdskljfklsdklas----: ",
            //   ownRecipe.data
            // );
            axios
              .get(`http://localhost:3000/allRecipes`)
              .then((allRecipes) => {
                setHomePage(data.data.sortByDate);
                setSaved(data.data.me[0]);
                setLoading(false);
                setProfile(ownRecipe.data);
                setInspired(allRecipes.data);
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
    changeData["username"] = "Louisaflor";
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
    console.log("went in here!");
    axios
      .get(`http://localhost:3000/recipe?user=Louisaflor`)
      .then((data) => {
        axios
          .get(`http://localhost:3000/ownRecipe?user=Louisaflor`)
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
    console.log("GOT IN THE REMOVE FOLLOW USER FUNC: ", person);
    axios
      .put(`http://localhost:3000/deleteFollowing`, {
        username: "Louisaflor",
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
    console.log("GOT IN THE FOLLOW USER FUNC: ", person);
    axios
      .put(`http://localhost:3000/following`, {
        username: "Louisaflor",
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
        username: "Louisaflor",
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
        username: "Louisaflor",
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
            />
          )}
        />
        <Stack.Screen name="Users Profile" component={UsersProfile} />
      </Stack.Navigator>
    );
  };

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
            name="Home Page"
            children={() => (
              <HomePage
                data={homePage}
                saveRecipe={saveRecipe}
                // navigation={navigation}
              />
            )}
          />

          {/* <Tab.Screen
            name="Get Inspired"
            children={() => (
              <GetInspired
                inspired={inspired}
                following={saved}
                followUser={followUser}
                removeFollower={removeFollower}
              />
            )}
          /> */}

          <Tab.Screen name="Get Inspired" component={UsersProfileNagivator} />

          <Tab.Screen
            name="Saved"
            children={() => <Saved saved={saved} deleteRecipe={deleteRecipe} />}
          />

          <Tab.Screen
            name="Profile"
            children={() => (
              <Profile profileData={profile} postRecipe={postRecipe} />
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
    width: 66,
    height: 58,
  },
});
