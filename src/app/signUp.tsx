import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Pressable,
  Appearance,
  useColorScheme,
  TextInput,
} from "react-native";

import { useState } from "react";

export default function SignUp() {
  const [passwordText, onChangePasswordText] = useState("");
  const [comfrimPasswordText, onChangecomfrimPasswordText] = useState("");
  const [userNameText, onChangeUserNameText] = useState("");

  return (
    <View style={[styles.main]}>
      <View style={styles.content}>
        <Text style={styles.text}>Username</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeUserNameText}
          value={userNameText}
          placeholder=""
        />
        <Text style={styles.text}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangePasswordText}
          value={passwordText}
          secureTextEntry
          placeholder=""
        />
        <Text style={styles.text}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangecomfrimPasswordText}
          value={comfrimPasswordText}
          secureTextEntry
          placeholder=""
        />
        <Pressable style={styles.button}>
          <Text>Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "black",
    flex: 1,
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  sym: {
    color: "white",
  },
  input: {
    height: 40,
    width: "40%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 30,
  },
  text: {
    color: "white",
  },
  button: {
    backgroundColor: "#B386C3",
    height: 40,
    margin: 12,
    borderRadius: 30,
    padding: 10,
    borderWidth: 1,
  },
});
