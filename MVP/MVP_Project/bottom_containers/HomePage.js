import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ListOnHomePage from "../components/ListOnHomePage.js";

const Stack = createStackNavigator();

export default function HomePage({ data }) {
  return (
    <SafeAreaView style={styles.safeView}>
      <Text>Hello</Text>
      <View>
        {data.map((person, index) => {
          return <ListOnHomePage key={index} person={person} />;
        })}
      </View>
    </SafeAreaView>
  );
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
