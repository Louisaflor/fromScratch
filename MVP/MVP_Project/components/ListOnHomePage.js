import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function ListOnHomePage({ person }) {
  console.log("WHAT IS PERSON DATA", person);

  return (
    <View style={styles.div}>
      <Text>hi</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  div: {
    borderColor: "black",
    borderWidth: 1,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
