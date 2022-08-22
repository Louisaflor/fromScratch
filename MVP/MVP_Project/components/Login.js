import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import axios from "axios";
import { useFonts } from "expo-font";

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableHighlight,
  Button,
  Image,
  ImageBackground,
} from "react-native";

export default function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [showErr, setShowErr] = useState(false);
  const [usernameAccount, setUsernameAccount] = useState("")

  let [fontsLoaded] = useFonts({
    "Inter-SemiBoldItalic":
      "https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12",
  });

  // useEffect(() => {
  //   axios
  //     .get(`https://10.0.2.2:3000/allUsers`)
  //     .then((data) => {
  //       console.log("GOT THE DATA");
  //       setUsers(data.data);
  //     })
  //     .catch((err) => {
  //       console.log("ERR WHEN GETTING ALL THE USERS: ", err);
  //     });
  // }, []);

  var userNames = [
    "Louisaflor",
    "Sam the Cooking Guy",
    "Chef John",
    "Martha Stewart",
  ];

  const navigate = () => {
    console.log("This works", users);
    var userNameThere = true;
    // for (var i = 0; i < users.length; i++) {
    //   if (users[i].includes(username)) {
    //     // inspired.splice(i, 1);
    //     userNameThere = true;
    //   }
    //   break;
    // }

    if (userNames.includes(username)) {
      // inspired.splice(i, 1);
      navigation.navigate("From Scratch", { username: username });
    } else {
      setShowErr(true);
      setTimeout(() => {
        setShowErr(false);
      }, 3000);
      return;
    }
  };

  // console.log("WHAT IS IN THE DATA: ", users);

  return (
    // <SafeAreaView>
    <ImageBackground
      // resizeMode="cover"
      style={styles.backgroundImage}
      source={{
        uri: "https://flamgraphics.weebly.com/uploads/2/7/8/3/27837765/cookingmama-cookstar-port02.jpg",
      }}
    >
      <View style={styles.mainDiv}>
        <View style={styles.center}>
          <Text style={styles.welcome}>Welcome to From Scratch!</Text>
          <Text style={styles.title}>Welcome Back!</Text>
          <TextInput
            placeholder="Username"
            style={styles.input}
            value={username}
            onChangeText={(value) => {
              setUsername(value);
            }}
          />

          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            style={styles.input}
            value={password}
            onChangeText={(value) => {
              setPassword(value);
            }}
          />

          {showErr && (
            <Text style={styles.err}>Sorry, Invalid NAME or PASSWORD</Text>
          )}
          <TouchableHighlight
            underlayColor="#DDDDDD"
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={navigate}
          >
            <Text style={styles.loginText}>Log in</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.center}>
          <Text style={styles.title}>New? Create account to get started!</Text>
          <TextInput
            placeholder="Username"
            style={styles.input}
            value={newEmail}
            onChangeText={(e) => {
              setNewEmail(e);
            }}
          />
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            style={styles.input}
            value={newPassword}
            onChangeText={(e) => {
              setNewPassword(e);
            }}
          />
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            style={styles.input}
            value={confirmPassword}
            onChangeText={(e) => {
              setConfirmPassword(e);
            }}
          />
          <TouchableHighlight
            style={[styles.buttonContainer, styles.loginButton]}
          >
            <Text style={styles.loginText}>Sign Up</Text>
          </TouchableHighlight>
        </View>
        {/* <Image
          style={styles.logo}
          // source={require("../assets/MAMA_HAS_A_HAPPY.webp")}
          source={{
            uri: "https://static.wikia.nocookie.net/cookingmama/images/4/47/MAMA_HAS_A_HAPPY.gif/revision/latest?cb=20180910213033",
          }}
        /> */}
      </View>
    </ImageBackground>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 25,
    fontFamily: "Inter-SemiBoldItalic",
    marginBottom: 15,
    paddingBottom: 15,
    textAlign: "center",
  },
  title: {
    fontFamily: "Inter-SemiBoldItalic",
    marginBottom: 8,
    paddingBottom: 8,
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    // borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginTop: 2,
    backgroundColor: "#9aebffc7",
    // fontFamily: "sans-serif-condensed",
  },
  buttonContainer: {
    flexDirection: "row",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 20,
  },
  loginButton: {
    backgroundColor: "#fac8e1",
    width: 180,
    height: 30,
    // borderColor: "black",
    // borderWidth: 1,
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
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#fcfefdeb",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 66,
    height: 58,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
  },
  err: {
    color: "red",
    fontFamily: "Inter-SemiBoldItalic",
    padding: 5,
  },
});
