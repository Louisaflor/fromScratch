import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomNavigation from "./BottomNavigation.js";
import Login from "../components/Login.js";

const Stack = createStackNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
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
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="From Scratch" component={BottomNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
