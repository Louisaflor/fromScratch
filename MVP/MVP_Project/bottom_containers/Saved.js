import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SavedImage from "../components/SavedImage.js";

export default function Saved({ saved, deleteRecipe }) {
  // console.log(
  //   "DATA FOR MY SAVED----------------------------RECIPES HELP ME PLEASE--------: ",
  //   saved.savedRecipes
  // );
  return (
    <SafeAreaView style={styles.mainDiv}>
      <ScrollView>
        <View style={styles.div}>
          {saved.savedRecipes.map((item, index) => {
            return (
              <SavedImage deleteRecipe={deleteRecipe} key={index} item={item} />
            );
          })}

          {/* <Text style={styles.text}>This is the Saved Page!</Text>
          <Text style={styles.text}>This is the Saved Page!</Text>
          <Text style={styles.text}>This is the Saved Page!</Text> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainDiv: {
    flex: 5,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 100,
    // width: "100%",
    // flexWrap: "wrap",
  },

  text: {
    borderColor: "black",
    margin: 5,
    padding: 10,
    borderWidth: 1,
    height: 170,
    width: 170,
    borderRadius: 10,
  },

  div: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    width: 20,
    height: 20,
    marginLeft: 130,
    marginTop: 100,
    borderWidth: 1,
    borderRadius: 18,
    elevation: 3,
  },

  // button: {
  //   textAlign: "right",
  //   position: "relative",
  //   borderColor: "black",
  //   width: 20,
  //   height: 20,
  //   borderWidth: 1,
  //   borderRadius: 18,
  //   elevation: 3,
  // },
  // minus: {
  //   position: "absolute",
  //   bottom: 0,
  //   right: 0,
  // },
});
