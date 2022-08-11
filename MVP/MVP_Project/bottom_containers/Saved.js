import React, { useState } from "react";
import { useFonts } from "expo-font";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
  Modal,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SavedImage from "../components/SavedImage.js";

export default function Saved({ saved, deleteRecipe }) {
  let [fontsLoaded] = useFonts({
    "Inter-SemiBoldItalic":
      "https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12",
  });
  // console.log(
  //   "DATA FOR MY SAVED----------------------------RECIPES HELP ME PLEASE--------: ",
  //   saved.savedRecipes
  // );
  return (
    <View style={styles.mainDiv}>
      <ScrollView>
        <Text style={styles.align}>Saved Recipes</Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  mainDiv: {
    flex: 5,
    justifyContent: "flex-end",
    alignItems: "center",
    // marginTop: 100,
    // width: "100%",
    // flexWrap: "wrap",
    backgroundColor: "#97ccf9d6",
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
  align: {
    textAlign: "center",
    marginTop: 10,
    paddingBottom: 20,
    fontFamily: "Inter-SemiBoldItalic",
    fontSize: 25,
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
