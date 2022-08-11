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

export default function DisplayIngredients({ item }) {
  const [isSelected, setSelection] = useState(false);

  return (
    // <View>
    <View style={styles.mainDiv}>
      <Checkbox
        value={isSelected}
        onValueChange={setSelection}
        style={styles.checkbox}
      />
      <Text style={styles.text}>{item}</Text>
    </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  mainDiv: {
    flex: 1,
    flexDirection: "row",
    marginTop: 15,
    // alignItems: "center",
    // justifyContent: "flex-start",
    // padding: 7,
    // margin: 3,
    // width: "80%",
  },
  checkbox: {
    // alignSelf: "center",
    marginRight: 3,
    marginLeft: -16,
    width: 13,
    height: 13,
    // marginRight: 5,
    marginTop: 3,
  },
  text: {
    fontSize: 12,
    paddingRight: 10,
    marginRight: 8,
    // marginTop: 2,
  },
});
