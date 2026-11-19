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
      <Stack.Screen
        name="signIn"
        options={{
          title: "Sign In",
          headerRight: () => <HomeHeaderRight />,
        }}
      />
      <Stack.Screen
        name="signOut"
        options={{
          title: "Sign Out",
          headerRight: () => <HomeHeaderRight />,
        }}
      />
      <Stack.Screen
        name="signUp"
        options={{
          title: "Sign Up",
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
