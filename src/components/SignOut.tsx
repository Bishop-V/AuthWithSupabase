import { useState } from "react";
import { ActivityIndicator, Pressable, Text, View } from "react-native";
import { supabase } from "../../utils/supabase";
import global from "@/style/global";

export default function SignOut() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSignOut() {
    setLoading(true);
    setError(null);
    const { error } = await supabase.auth.signOut();
    if (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  return (
    <View>
      {error && <Text style={{ color: "red" }}>{error}</Text>}
      <Pressable
        onPress={handleSignOut}
        disabled={loading}
        style={global.signUpButton}
      >
        {loading ? <ActivityIndicator /> : <Text>Sign Out</Text>}
      </Pressable>
    </View>
  );
}
