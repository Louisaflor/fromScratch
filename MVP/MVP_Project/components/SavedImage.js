import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function savedImage({ item, deleteRecipe }) {
  return (
    <View style={styles.text}>
      <View style={styles.alignTitle}>
        <Text style={styles.title}>{item.name}</Text>
        <Image
          style={styles.food}
          source={{
            uri: item.image,
          }}
        />
        <View style={styles.bottom}>
          <Text>{item.username}</Text>
          <Pressable
            style={styles.button}
            onPress={() => {
              deleteRecipe(item.name);
            }}
          >
            <Text>-</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    borderColor: "black",
    margin: 5,
    padding: 10,

    borderWidth: 1,
    height: 170,
    width: 170,
    borderRadius: 10,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    width: 20,
    height: 20,
    // marginLeft: 130,
    // marginTop: 13,
    borderWidth: 1,
    borderRadius: 18,
    elevation: 3,
  },
  food: {
    width: 85,
    height: 76,
    borderRadius: 20,
    marginTop: 10,
  },

  title: {
    textAlign: "center",
  },

  alignTitle: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  bottom: {
    width: "105%",
    flex: 1,
    justifyContent: "space-between",
    alignContent: "flex-end",
    flexDirection: "row",
    marginTop: 15,
  },
});
