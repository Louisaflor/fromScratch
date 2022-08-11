import React, { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Dimensions,
  Alert,
  Modal,
  ImageBackground,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ListOnHomePage from "../components/ListOnHomePage.js";

const Stack = createStackNavigator();
const screenWidth = Dimensions.get("window").width;

export default function HomePage({ data, saveRecipe }) {
  let [fontsLoaded] = useFonts({
    "Inter-SemiBoldItalic":
      "https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12",
  });
  // console
  //   .log
  // "I AM IN HERE PLEWKSDFJKLSDFHKLSDEFHLKAEJFILOQEJFILOjhfklsdghfk;sdjfkiwehdqfjksdghfkljdshfgwd"
  // ();
  // console.log("WHAT IS DATA: ", data);
  var pictures = {
    "Chef John":
      "/Users/louisayonzon/hackReactor/MVP/fromScratch/MVP/MVP_Project/assets/grandpa.jpg",
    "Sam the Cooking Guy":
      "/Users/louisayonzon/hackReactor/MVP/fromScratch/MVP/MVP_Project/assets/papa2.jpg",
    "Martha Stewart":
      "https://static.wikia.nocookie.net/cookingmama/images/3/3e/Ichigo.png/revision/latest?cb=20181231192056",
  };
  // console.log("WHAT ARE THE DIMENSIONS: ", screenWidth);
  return (
    // <View>
    <ImageBackground
      // resizeMode="cover"
      style={styles.backgroundImage}
      source={{
        uri: "https://media.istockphoto.com/vectors/tartan-vector-seamless-patterns-vector-id972344360?k=20&m=972344360&s=612x612&w=0&h=sJlQgGXq9uT0X3nO15p1jd0KDB9VudDWJ_cU14xo3mM=",
      }}
    >
      <View style={styles.safeView}>
        {/* <SafeAreaView > */}
        <Text style={styles.align}>Home</Text>
        <ScrollView>
          <View>
            {/* <Text style={styles.text}>Welcome Back</Text> */}
            {data.map((person, index) => {
              return (
                <ListOnHomePage
                  saveRecipe={saveRecipe}
                  key={index}
                  person={person}
                  pictures={pictures}
                />
              );
            })}
          </View>
        </ScrollView>
        {/* </SafeAreaView> */}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  safeView: {
    // backgroundColor: "#fdc5e0e3",
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
    marginTop: 10,
    paddingBottom: 20,
    fontFamily: "Inter-SemiBoldItalic",
    fontSize: 25,
  },
  backgroundImage: {
    flex: 1,
    // justifyContent: "center",
  },
});
