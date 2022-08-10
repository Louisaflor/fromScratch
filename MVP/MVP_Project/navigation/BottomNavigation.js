import React, { useState, useEffect } from "react";
import { Text, View, Image, StyleSheet, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "../bottom_containers/HomePage.js";
import GetInspired from "../bottom_containers/GetInspired.js";
import Saved from "../bottom_containers/Saved.js";
import Profile from "../bottom_containers/Profile.js";
import axios from "axios";

const Tab = createBottomTabNavigator();

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
        // console.log("WHAT IS DATA..: ", data.data);
        setHomePage(data.data.sortByDate);
        setSaved(data.data.me[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.log("ERR WHEN GETTING DATA: ", err);
      });
  }, []);

  const getRequest = () => {
    console.log("went in here!");
    axios
      .get(`http://localhost:3000/recipe?user=Louisaflor`)
      .then((data) => {
        // console.log("WHAT IS DATA..: ", data.data);
        setHomePage(data.data.sortByDate);
        setSaved(data.data.me[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.log("ERR WHEN GETTING DATA: ", err);
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
              <HomePage data={homePage} saveRecipe={saveRecipe} />
            )}
          />

          <Tab.Screen name="Get Inspired" component={GetInspired} />

          <Tab.Screen
            name="Saved"
            children={() => <Saved saved={saved} deleteRecipe={deleteRecipe} />}
          />

          <Tab.Screen name="Profile" component={Profile} />
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
