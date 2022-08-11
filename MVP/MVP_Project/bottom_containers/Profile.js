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

export default function Profile({
  profileData,
  postRecipe,
  pictureAndColor,
  saved,
}) {
  console.log(
    "WHAT IS IN THE orfile date IN HOME PAGE===========: ",
    profileData
  );
  const [modalVisible, setModalVisible] = useState(false);
  const [newRecipeVisible, setNewRecipeVisible] = useState(false);

  const [newStepsVisible, setNewStepsVisible] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");

  const postReq = () => {
    var data = {
      name: name,
      description: description,
      ingredients: ingredients,
      steps: newStepsVisible,
    };
    postRecipe(data);
    setNewRecipeVisible(false);
    setNewStepsVisible("");
    setIngredients("");
    setName("");
    setDescription("");
  };

  return (
    <View style={styles.container}>
      <Modal animationType="slide" visible={newRecipeVisible}>
        <ScrollView>
          <View style={styles.description}>
            <TextInput
              placeholder="Name"
              multiline={true}
              numberOfLines={5}
              value={name}
              onChangeText={(value) => {
                setName(value);
              }}
              editable
              maxLength={100}
            />
          </View>

          <View style={styles.description2}>
            <TextInput
              placeholder="Provide description"
              multiline={true}
              numberOfLines={5}
              value={description}
              onChangeText={(value) => {
                setDescription(value);
              }}
              editable
              maxLength={100}
            />
          </View>

          <View style={styles.modalView}>
            <TextInput
              placeholder="What are your ingredients?"
              multiline={true}
              numberOfLines={10}
              value={ingredients}
              onChangeText={(value) => {
                setIngredients(value);
              }}
              editable
              maxLength={100}
            />
          </View>

          <View style={styles.modalView}>
            <TextInput
              placeholder="Tell me the process"
              multiline={true}
              numberOfLines={10}
              value={newStepsVisible}
              onChangeText={(value) => {
                setNewStepsVisible(value);
              }}
              editable
              maxLength={100}
            />
          </View>
          <View style={styles.bodyContent}>
            <Pressable
              onPress={() => setNewRecipeVisible(true)}
              style={styles.menuBox}
            >
              <Text style={styles.info}>Add Image +</Text>
            </Pressable>
          </View>
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
              onPress={() => setNewRecipeVisible(!newRecipeVisible)}
            >
              <Text style={styles.textStyle}>HIDE</Text>
            </Pressable>
            <Pressable style={styles.buttonClose} onPress={postReq}>
              <Text style={styles.textStyle}>POST</Text>
            </Pressable>
          </View>
        </ScrollView>
      </Modal>

      {/*End of MODAL HERE */}

      <View style={{ backgroundColor: pictureAndColor[saved.username].color }}>
        <View style={styles.headerContent}>
          <Image
            style={styles.avatar}
            source={{
              uri: pictureAndColor[saved.username].url,
            }}
          />

          <Text style={styles.name}>{saved.username}</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            {profileData.length !== 0 &&
              profileData.map((item, index) => {
                return (
                  <View key={index} style={styles.menuBox}>
                    <Image
                      style={styles.icon}
                      source={{
                        uri: item.image,
                      }}
                    />
                    <Text style={styles.info}>{item.name}</Text>
                  </View>
                );
              })}
            {/* <View style={styles.menuBox}>
              <Image
                style={styles.icon}
                source={{
                  uri: "https://static.wikia.nocookie.net/cookingmama/images/4/47/MAMA_HAS_A_HAPPY.gif/revision/latest?cb=20180910213033",
                }}
              />
              <Text style={styles.info}>Icon</Text>
            </View> */}

            <Pressable
              onPress={() => setNewRecipeVisible(true)}
              style={styles.menuBox}
            >
              <Text style={styles.info}>Add Recipe +</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
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
    width: 100,
    height: 100,
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
    width: 60,
    height: 60,
  },
  info: {
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
