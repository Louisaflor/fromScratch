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
      <Text>{item}</Text>
    </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  mainDiv: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  checkbox: {
    alignSelf: "center",
    marginRight: 5,
    marginLeft: 0,
  },
});
