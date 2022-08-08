import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  AsyncStorage,
} from "react-native";
import Login from "./components/Login.js";
import { Parse } from "parse/react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// Initializing the SDK.
Parse.setAsyncStorage(AsyncStorage);
//You need to copy BOTH the the Application ID and the Javascript Key from: Dashboard->App Settings->Security & Keys
Parse.initialize(
  "VY14dABrhrd0P0fGW7Sza8KzjnrV3nRZabaANjEl",
  "s6WAxZzLpGL6QGSH3tm6JcCD5F2UQBwEYtkhyRwS"
);
Parse.serverURL = "https://parseapi.back4app.com/";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to From Scratch!</Text>
      <Login />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "red",
  },
});
