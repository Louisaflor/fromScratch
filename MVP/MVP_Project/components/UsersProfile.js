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

export default function Profile({ route }) {
  // console.log("WHAT IS THE ROUTE: ", route.params.pictures);
  var color = route.params.color;
  const [modalVisible, setModalVisible] = useState(false);
  const [newRecipeVisible, setNewRecipeVisible] = useState(false);

  const [newStepsVisible, setNewStepsVisible] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");

  var picUrl = route.params.pictures[route.params.data[0].username].url;
  // console.log("THIS IS THE PIC URL: ", picUrl);
  //pictures[item[0].username].url

  return (
    <View>
      <View style={{ backgroundColor: color }}>
        <View style={styles.headerContent}>
          <Image
            style={styles.avatar}
            source={{
              uri: picUrl,
            }}
          />

          <Text style={styles.name}>{route.params.data[0].username}</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            {route.params.data.map((item, index) => {
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
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30,
  },
  textInfo: {
    fontSize: 18,
    marginTop: 20,
    color: "#696969",
  },
  bodyContent: {
    paddingTop: 40,
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
});
