import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import axios from "axios";

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableHighlight,
  Button,
} from "react-native";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const test = () => {
    axios
      .get(`http://localhost:3000/recipe`)
      .then((data) => {
        console.log("CHECK IF THE AXIOS WORKS WITH REACT NATIVE: ", data.data);
      })
      .catch((err) => {
        console.log("ERROR IN AXIOS: ", err);
      });
  };

  return (
    <SafeAreaView>
      <View style={styles.mainDiv}>
        <View style={styles.center}>
          <Text>Welcome to From Scratch!</Text>
          <Text>Welcome Back!</Text>
          <TextInput
            placeholder="Username"
            style={styles.input}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            style={styles.input}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <TouchableHighlight
            underlayColor="#DDDDDD"
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={() => {
              navigation.navigate("bottomNavigator");
            }}
          >
            <Text style={styles.loginText}>Log in</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.center}>
          <Text>New? Create account to get started!</Text>
          <TextInput
            placeholder="Email"
            ç
            style={styles.input}
            value={newEmail}
            onChange={(e) => {
              setNewEmail(e.target.value);
            }}
          />
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            style={styles.input}
            value={newPassword}
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
          />
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            style={styles.input}
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <TouchableHighlight
            style={[styles.buttonContainer, styles.loginButton]}
          >
            <Text style={styles.loginText}>Sign Up</Text>
          </TouchableHighlight>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginTop: 2,
  },
  buttonContainer: {
    flexDirection: "row",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 5,
  },
  loginButton: {
    backgroundColor: "white",
    width: 180,
    height: 30,
    borderColor: "black",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    color: "black",
  },
  mainDiv: {
    margin: 20,
    padding: 20,
    paddingTop: 40,
    paddingBottom: 40,
    marginTop: 130,
    borderColor: "black",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});
