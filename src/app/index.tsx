import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Pressable,
  Appearance,
  useColorScheme,
} from "react-native";
import global from "@/style/global";

export default function Index() {
  return (
    <View style={[styles.main]}>
      <View style={styles.content}>
        <Text style={styles.sym}>Not logged in!</Text>
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
