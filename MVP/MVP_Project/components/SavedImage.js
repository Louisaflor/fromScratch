import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
  Image,
  Modal,
  // CheckBox,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { CheckBox } from "@react-native-community/checkbox";
// import CheckBox from "@react-native-community/checkbox";
import Checkbox from "expo-checkbox";
import DisplaySavedItems from "./DisplaySavedItems.js";
import DisplayIngredients from "./DisplayIngredients.js";

export default function savedImage({ item, deleteRecipe }) {
  const [displayModal, setDisplayModal] = useState(false);
  // console.log("WHAT IS ITEM IN THE SAVED IMAGE__-------: ", item);
  return (
    <View>
      <Modal animationType="slide" visible={displayModal}>
        <ScrollView>
          <View style={styles.description}>
            <Text>Ingredients to follow:</Text>
            {item.ingredients.map((item, index) => {
              return <DisplayIngredients key={index} item={item} />;
            })}
          </View>
          <View style={styles.description2}>
            <Text>Steps to follow:</Text>
            {item.steps.map((item, index) => {
              return <DisplaySavedItems key={index} item={item} />;
            })}
          </View>

          <Pressable
            style={styles.buttonClose}
            onPress={() => setDisplayModal(!displayModal)}
          >
            <Text style={styles.textStyle}>HIDE</Text>
          </Pressable>
        </ScrollView>
      </Modal>

      {/*End of Modal HERE */}

      <View style={styles.text}>
        <View style={styles.alignTitle}>
          <Text style={styles.title}>{item.name}</Text>
          <Pressable
            onPress={() => {
              setDisplayModal(true);
            }}
          >
            <Image
              style={styles.food}
              source={{
                uri: item.image,
              }}
            />
          </Pressable>
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
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    // borderColor: "black",
    marginHorizontal: 5,
    marginTop: 30,
    padding: 10,
    backgroundColor: "white",
    // borderWidth: 1,
    height: 170,
    width: 170,
    borderRadius: 10,
  },
  textStyle: {
    textAlign: "center",
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
  description: {
    margin: 10,
    marginTop: 50,
    backgroundColor: "#febd0ec2",
    borderRadius: 20,
    padding: 30,
    height: 350,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  checkbox: {
    alignSelf: "center",
  },
  description2: {
    margin: 10,
    marginTop: 1,
    backgroundColor: "#febd0ec2",
    borderRadius: 20,
    padding: 30,
    height: 350,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  checkbox: {
    alignSelf: "center",
  },
});
