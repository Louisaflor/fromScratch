import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomNavigation from "./BottomNavigation.js";
import Login from "../components/Login.js";

const Stack = createStackNavigator();

export default function Main() {

   // useEffect(() => {
  //   axios
  //     .get(`https://10.0.2.2:3000/allUsers`)
  //     .then((data) => {
  //       console.log("GOT THE DATA");
  //       setUsers(data.data);
  //     })
  //     .catch((err) => {
  //       console.log("ERR WHEN GETTING ALL THE USERS: ", err);
  //     });
  // }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerTintColor: "transparent",
          headerstyle: {
            backgroundColor: "transparent",
          },
          headerTransparent: true,
          headerTitle: "",
          headerLeftContainerStyle: {
            paddingLeft: 10,
            // marginTop: 65,
          },
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="From Scratch" component={BottomNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
