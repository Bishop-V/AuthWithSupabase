import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Pressable,
  Appearance,
  useColorScheme,
} from "react-native";

export default function HomeHeaderRight() {
  return (
    <Pressable style={styles.main}>
      <Text style={styles.sym}>Log in</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "black",
  },

  sym: {
    color: "#B386C3",
  },
});
