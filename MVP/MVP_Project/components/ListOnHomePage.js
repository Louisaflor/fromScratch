import React, { useState } from "react";
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
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function ListOnHomePage({ person, pictures, saveRecipe }) {
  // console.log("i am also in here too hellp lpefsaopjasdiofhjsdklghkls");
  // console.log("WHAT IS PERSON DATA", person);
  const [modalVisible, setModalVisible] = useState(false);

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
              <Text style={styles.modalText}>Ingredients:</Text>
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

            <View style={styles.modalView}>
              <Text style={styles.modalText}>Steps:</Text>
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

      <View style={styles.biggerDiv}>
        <View style={styles.div}>
          <View>
            <Text>{person.username}</Text>
            <Image
              style={styles.logo}
              source={{
                uri: pictures[person.username],
              }}
            />
          </View>
          <View>
            <View style={styles.centerItems}>
              <Text>{person.name}</Text>
              <Image
                style={styles.food}
                source={{
                  uri: person.image,
                }}
              />
            </View>
          </View>

          <View>
            <View>
              <Text>{person.createdAt.slice(0, 10)}</Text>
              <TouchableHighlight
                underlayColor="#DDDDDD"
                onPress={() => setModalVisible(true)}
              >
                <Text>View More</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
        <View>
          <Text>{person.description}</Text>
          <Pressable
            style={styles.button}
            onPress={() => {
              saveRecipe(person["_id"], person.name);
            }}
          >
            <Text>+</Text>
          </Pressable>
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
    backgroundColor: "#DCDCDC",
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
    height: 200,
    borderRadius: 5,
  },
  logo: {
    width: 56,
    height: 48,
    borderRadius: 50,
  },
  food: {
    width: 76,
    height: 68,
    borderRadius: 20,
  },
  centerItems: {
    flex: 1,
    flexDirection: "column",
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
  modalText: {
    marginBottom: 15,
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
});
