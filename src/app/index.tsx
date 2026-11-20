import { Link, router, useRouter } from "expo-router";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Pressable,
  Appearance,
  useColorScheme,
  Button,
} from "react-native";

export default function Index() {
  return (
    <View style={[styles.main]}>
      <View style={styles.content}>
        <Button title="sign in" onPress={() => router.push("/signIn")} />
        <Button title="sign up" onPress={() => router.push("/signUp")} />
        <Button title="sign out" onPress={() => router.push("/signOut")} />
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
});
