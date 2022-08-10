import React, { useState, useEffect } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
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
        setSaved(data.data.me);
        setLoading(false);
      })
      .catch((err) => {
        console.log("ERR WHEN GETTING DATA: ", err);
      });
  }, []);

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
            children={() => <HomePage data={homePage} />}
          />

          <Tab.Screen name="Get Inspired" component={GetInspired} />

          <Tab.Screen name="Saved" children={() => <Saved saved={saved} />} />

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
