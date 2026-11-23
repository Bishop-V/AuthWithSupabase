import { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { supabase } from "../../utils/supabase";
import { useAuth } from "../../context/AuthProvider";
import SignOut from "../components/SignOut";

type ProfileData = {
  email: string;
};

export default function Profile() {
  const { session } = useAuth();
  const userId = session?.user.id;
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userId) return;
    let cancelled = false;

    async function getProfile() {
      const { data, error } = await supabase
        .from("profiles")
        .select("email")
        .eq("id", userId)
        .maybeSingle();

      if (cancelled) return;
      if (error) setError(error.message);
      else setProfile(data);
      setLoading(false);
    }

    getProfile();
    return () => {
      cancelled = true;
    };
  }, [userId]);

  if (loading) {
    return (
      <View style={global.page}>
        <ActivityIndicator color="white" />
      </View>
    );
  }

  return (
    <View style={global.page}>
      <View style={global.card}>
        <Text style={global.badge}>PRIVATE</Text>

        {error && <Text style={global.error}>Error: {error}</Text>}

        {profile ? (
          <>
            <Text style={global.label}>Email</Text>
            <Text style={global.value}>{profile.email}</Text>
          </>
        ) : (
<<<<<<< Updated upstream
          !error && <Text style={global.label}>No profile found for this account.</Text>
=======
          !error && (
            <Text style={styles.label}>No profile found for this account.</Text>
          )
>>>>>>> Stashed changes
        )}

        <SignOut />
      </View>
    </View>
  );
<<<<<<< Updated upstream
}
=======
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24 },
  card: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 8,
    padding: 16,
    gap: 8,
  },
  badge: {
    alignSelf: "flex-start",
    fontSize: 12,
    fontWeight: "bold",
    color: "red",
  },
  label: { fontSize: 12, color: "#666" },
  value: { fontSize: 18 },
  error: { color: "red" },
});
>>>>>>> Stashed changes
