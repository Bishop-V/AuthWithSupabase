import { StyleSheet } from "react-native";

import { Stack } from "expo-router";
import HomeHeaderRight from "@/components/HomeHeaderRight";
export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: styles.headerStyle,
        headerTintColor: "white",
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerRight: () => <HomeHeaderRight />,
        }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "black",
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
