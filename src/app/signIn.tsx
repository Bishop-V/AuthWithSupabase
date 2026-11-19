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

export default function SignIn() {
  const [text, onChangeText] = useState("");

  return (
    <View style={[styles.main]}>
      <View style={styles.content}>
        <Text style={styles.text}>Username</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder=""
        />
        <Text style={styles.text}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          secureTextEntry
          placeholder=""
        />

        <Pressable style={styles.button}>
          <Text>Sign in</Text>
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
