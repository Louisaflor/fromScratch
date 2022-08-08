import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableHighlight,
  Button,
} from "react-native";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View>
      <View>
        <Text>Welcome Back!</Text>
        <TextInput
          placeholder="Email"
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
        <Button title="Log in" />
      </View>
      <View>
        <Text>New? Create account to get started!</Text>
        <TextInput
          placeholder="Email"
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
        <Button title="Sign Up" />
      </View>
    </View>
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
});
