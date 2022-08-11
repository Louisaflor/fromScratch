import React, { useState } from "react";
import { useFonts } from "expo-font";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Modal,
  Pressable,
  Image,
  TouchableHighlight,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function ListOnHomePage({ person, pictures, saveRecipe }) {
  // console.log("i am also in here too hellp lpefsaopjasdiofhjsdklghkls");
  // console.log("WHAT IS PERSON DATA", person);
  const [modalVisible, setModalVisible] = useState(false);

  let [fontsLoaded] = useFonts({
    "Inter-SemiBoldItalic":
      "https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12",
  });

  return (
    <View>
      <Modal
        animationType="fade"
        // transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <ScrollView>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText2}>Ingredients:</Text>
              <View>
                {person.ingredients.map((each, index) => {
                  return (
                    <Text key={index} style={styles.modalText}>
                      {each}
                    </Text>
                  );
                })}
              </View>
            </View>

            <View style={styles.modalView2}>
              <Text style={styles.modalText2}>Steps:</Text>
              <View>
                {person.steps.map((steps, index) => {
                  return (
                    <Text key={index} style={styles.modalText}>
                      {steps}
                    </Text>
                  );
                })}
              </View>
              <Pressable
                style={styles.buttonClose}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </Modal>

      {/* {console.log(
        "What is the url--------------: ",
        pictures[person.username].url
      )} */}

      <View style={styles.biggerDiv}>
        <View style={styles.right}>
          <Text>{person.createdAt.slice(0, 10)}</Text>
        </View>
        <View style={styles.pictureAndAdd}>
          <View>
            <Image
              style={styles.logo}
              source={{
                uri: pictures[person.username].url,
              }}
            />
            <Text>{person.username}</Text>
          </View>
          {/* </View> */}
          <View>
            <Text style={styles.centerItems}>{person.name}</Text>
            <TouchableOpacity
              underlayColor="#fec3e5"
              onPress={() => setModalVisible(true)}
            >
              <Image
                style={styles.food}
                source={{
                  uri: person.image,
                }}
              />
            </TouchableOpacity>
            <View style={styles.description}>
              <Text>{person.description}</Text>
            </View>
          </View>
          <View>
            <Pressable
              // style={styles.button}
              onPress={() => {
                saveRecipe(person["_id"], person.name);
              }}
            >
              <Image
                style={styles.logo2}
                source={{
                  uri: "https://thumbs.dreamstime.com/b/girly-notepad-writing-cute-notebook-spring-flower-studying-keeping-diary-vector-illustration-flat-cartoon-224682506.jpg",
                }}
              />
              {/* <Text>+</Text> */}
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  div: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  biggerDiv: {
    backgroundColor: "#fefffeeb",
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 2,
      width: -2,
    },
    elevation: 4,
    // borderColor: "black",
    padding: 10,
    // borderWidth: 1,
    margin: 10,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    width: 380,
    height: 490,
    borderRadius: 5,
    // justifyContent: "center",
    // alignItems: "center",
  },
  logo: {
    width: 56,
    height: 48,

    borderRadius: 50,
  },
  logo2: {
    // marginLeft: 7,
    // marginBottom: 7,
    width: 50,
    height: 50,
    borderRadius: 50,
    alignSelf: "flex-end",
  },
  food: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    // marginHorizontal: "10%",
  },
  centerItems: {
    textAlign: "center",
    fontFamily: "Inter-SemiBoldItalic",
    marginBottom: 5,
    marginTop: 10,
    fontSize: 20,
    // justifyContent: "center",
    // borderColor: "black",
    // borderWidth: 1,
  },

  bottomContainer: {
    width: "100%",
    flex: 1,
    justifyContent: "space-between",
    alignContent: "flex-end",
    flexDirection: "row",
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 5,
    marginTop: 50,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  modalView2: {
    margin: 5,
    marginTop: 2,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  modalText2: {
    marginBottom: 15,
    // textAlign: "left",
    fontFamily: "Inter-SemiBoldItalic",
    textDecorationLine: "underline",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    // fontFamily: "Inter-SemiBoldItalic",
    // textDecorationLine: "underline",
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
  right: {
    alignSelf: "flex-end",
    position: "absolute",
    marginTop: 10,
    marginRight: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  pictureAndAdd: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  description: {
    backgroundColor: "#fec9e4ab",
    padding: 5,
    borderRadius: 15,
  },
});
