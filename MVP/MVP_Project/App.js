import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Login from "./components/Login.js";
import axios from "axios";
// import Parse from "parse/react-native.js";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import Main from "./navigation/Main.js";

// // Initializing the SDK.
// Parse.setAsyncStorage(AsyncStorage);
// // //You need to copy BOTH the the Application ID and the Javascript Key from: Dashboard->App Settings->Security & Keys
// Parse.initialize(
//   "VY14dABrhrd0P0fGW7Sza8KzjnrV3nRZabaANjEl",
//   "s6WAxZzLpGL6QGSH3tm6JcCD5F2UQBwEYtkhyRwS"
// );
// Parse.serverURL = "https://parseapi.back4app.com/";

export default function App() {
  async function signUp(data) {
    //check if the user
  }
  return (
    <View style={styles.container}>
      <Main />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

    justifyContent: "center",
  },

  text: {
    color: "red",
  },
});
