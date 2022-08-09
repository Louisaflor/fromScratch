import React, { useState } from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "../bottom_containers/HomePage.js";
import GetInspired from "../bottom_containers/GetInspired.js";
import Saved from "../bottom_containers/Saved.js";
import Profile from "../bottom_containers/Profile.js";

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName="HomePage"
        screenOptions={{
          tabBarActiveTintColor: "#e91e63",
        }}
      >
        <Tab.Screen name="HomePage" component={HomePage} />

        <Tab.Screen name="GetInspired" component={GetInspired} />

        <Tab.Screen name="Saved" component={Saved} />

        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
