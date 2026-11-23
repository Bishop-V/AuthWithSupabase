import { Link } from "expo-router";
import { Text, View } from "react-native";
import { useAuth } from "./../../context/AuthProvider";
import global from "@/style/global";

export default function Index() {
  const { session } = useAuth();

  return (
    <View style={global.page}>
      <View style={global.card}>
        <Text style={global.value}>Home</Text>
        {session ? (
          <Link href="/profile" style={global.text}>
            View your profile
          </Link>
        ) : (
          <>
            <Link href="/signIn" style={global.text}>
              Sign in
            </Link>
            <Link href="/signUp" style={global.text}>
              Sign up
            </Link>
          </>
        )}
      </View>
    </View>
  );
}