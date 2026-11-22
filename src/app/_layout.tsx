import { ActivityIndicator, View } from "react-native";
import { AuthProvider, useAuth } from "./../../context/AuthProvider";
import { Stack } from "expo-router";
import HomeHeaderRight from "@/components/HomeHeaderRight";
import global from "@/style/global";

function RootNavigator() {
  const { session, loading } = useAuth();

  if (loading) {
    return (
      <View style={[global.main, global.content]}>
        <ActivityIndicator color="white" />
      </View>
    );
  }

  return (
    <Stack
      screenOptions={{
        headerStyle: global.headerStyle,
        headerTintColor: "white",
        headerShadowVisible: false,
        headerRight: () => <HomeHeaderRight />,
      }}
    >
      <Stack.Screen name="index" options={{ title: "Home" }} />

      <Stack.Protected guard={!session}>
        <Stack.Screen name="signIn" options={{ title: "Sign In" }} />
        <Stack.Screen name="signUp" options={{ title: "Sign Up" }} />
        <Stack.Screen name="confirmation" options={{ title: "Confirm Email" }} />
      </Stack.Protected>

      <Stack.Protected guard={!!session}>
        <Stack.Screen name="profile" options={{ title: "Profile" }} />
      </Stack.Protected>
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
}
