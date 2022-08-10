import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ListOnHomePage from "../components/ListOnHomePage.js";

const Stack = createStackNavigator();
const screenWidth = Dimensions.get("window").width;

export default function HomePage({ data }) {
  // console.log("WHAT IS DATA: ", data);
  var pictures = {
    "Chef John":
      "/Users/louisayonzon/hackReactor/MVP/fromScratch/MVP/MVP_Project/assets/chef_john.jpeg",
    "Sam the Cooking Guy":
      "/Users/louisayonzon/hackReactor/MVP/fromScratch/MVP/MVP_Project/assets/sam.jpeg",
  };
  // console.log("WHAT ARE THE DIMENSIONS: ", screenWidth);
  return (
    // <View>

    <SafeAreaView style={styles.safeView}>
      <Text style={styles.align}>From Scratch</Text>
      <ScrollView>
        <View>
          {/* <Text style={styles.text}>Welcome Back</Text> */}
          {data.map((person, index) => {
            return (
              <ListOnHomePage key={index} person={person} pictures={pictures} />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
    // </View>
  );
}

const styles = StyleSheet.create({
  safeView: {
    flex: 5,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 100,
    width: "100%",
  },

  text: {
    padding: 10,
  },
  logo: {
    width: 66,
    height: 58,
  },
  align: {
    textAlign: "center",
    paddingBottom: 20,
  },
});
