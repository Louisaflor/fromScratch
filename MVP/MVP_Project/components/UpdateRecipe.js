import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Modal,
  TextInput,
  Pressable,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function UpdateRecipe({
  updateRecipeModal,
  setUpdateRecipeModal,
  recipe,
  // updateNewStepsVisible,
  // updateIngredients,
  // updateDescription,
  // updateName,
}) {
  if (recipe.length === 0) {
    return <Text></Text>;
  }
  const [updateNewStepsVisible, setUpdateNewStepsVisible] = useState(
    recipe.steps.join("\r\n")
  );
  const [updateIngredients, setUpdateIngredients] = useState(
    recipe.ingredients.join("\r\n")
  );
  const [updateDescription, setUpdateDescription] = useState(
    recipe.description
  );
  const [updateName, setUpdateName] = useState(recipe.name);

  console.log("WHAT IS THE RECEIPE--------------: ");
  // setUpdateName(recipe.name);
  // setUpdateDescription();
  // setUpdateIngredients();
  // setUpdateNewStepsVisible();

  return (
    <View>
      <Modal animationType="slide" visible={updateRecipeModal}>
        <ScrollView>
          <View style={styles.description}>
            <TextInput
              // placeholder="Name"
              multiline={true}
              numberOfLines={5}
              value={updateName}
              onChangeText={setUpdateName}
              editable
              maxLength={100}
            />
          </View>

          <View style={styles.description}>
            <TextInput
              placeholder="Provide description"
              multiline={true}
              numberOfLines={5}
              value={updateDescription}
              onChangeText={setUpdateDescription}
              editable
              maxLength={100}
            />
          </View>

          <View style={styles.modalView}>
            <TextInput
              placeholder="What are your ingredients?"
              multiline={true}
              numberOfLines={10}
              value={updateIngredients}
              onChangeText={setUpdateIngredients}
              editable
              maxLength={100}
            />
          </View>

          <View style={styles.modalView}>
            <TextInput
              placeholder="Tell me the process"
              multiline={true}
              numberOfLines={10}
              value={updateNewStepsVisible}
              onChangeText={setUpdateNewStepsVisible}
              editable
              maxLength={100}
            />
          </View>
          <View style={styles.bodyContent}></View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginBottom: 20,
              paddingBottom: 20,
              justifyContent: "center",
            }}
          >
            <Pressable
              style={styles.buttonClose}
              onPress={() => setUpdateRecipeModal(false)}
            >
              <Text style={styles.textStyle}>HIDE</Text>
            </Pressable>
            {/* need this to submit changed */}
            <Pressable style={styles.buttonClose}>
              <Text style={styles.textStyle}>POST</Text>
            </Pressable>
          </View>
        </ScrollView>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fec3e5",
  },
  headerContent: {
    padding: 30,
    alignItems: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
  name: {
    fontSize: 25,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  // bodyContent: {
  //   flex: 1,
  //   alignItems: "center",
  //   padding: 30,
  // },
  textInfo: {
    fontSize: 18,
    marginTop: 20,
    color: "#696969",
  },
  bodyContent: {
    paddingTop: 0,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  menuBox: {
    backgroundColor: "#DCDCDC",
    width: 105,
    height: 105,
    alignItems: "center",
    justifyContent: "center",
    margin: 12,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 2,
      width: -2,
    },
    elevation: 4,
  },
  icon: {
    width: 65,
    height: 65,
    borderRadius: 10,
  },
  info: {
    fontSize: 12,
    color: "#696969",
    textAlign: "center",
  },

  addRecipe: {
    fontSize: 22,
    color: "#696969",
    textAlign: "center",
  },

  modalView: {
    margin: 10,
    marginTop: 1,
    backgroundColor: "pink",
    borderRadius: 20,
    padding: 35,
    height: 350,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  description: {
    margin: 10,
    marginTop: 50,
    backgroundColor: "#febd0ec2",
    borderRadius: 20,
    padding: 20,
    height: 60,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  description2: {
    margin: 10,
    marginTop: 1,
    backgroundColor: "#febd0ec2",
    borderRadius: 20,
    padding: 20,
    height: 60,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  textStyle: {
    textAlign: "center",
    // alignSelf: "flex-end",
  },
  buttonClose: {
    padding: 15,
    backgroundColor: "#aaed84cf",
    marginHorizontal: 10,
    // marginBottom: 30,
    // height: 20,
    borderRadius: 10,
  },
});
