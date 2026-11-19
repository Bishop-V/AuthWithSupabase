import { useEffect, useState } from "react";
import { ActivityIndicator, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { supabase } from "../../utils/supabase";
import { useAuth } from "../../context/AuthProvider";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Control, Controller, FieldPath, useForm } from "react-hook-form";
import { useLocalSearchParams } from "expo-router";



type ProfileData = {
  email: string;
  password: string;
};

export default function Profile() {
  const { session } = useAuth();
  const userId = session?.user.id;
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function getProfile() {
      const { data, error } = await supabase
        .from("profiles")
        .select("email, password")
        .eq("id", userId)
        .single();

      if (cancelled) return;
      if (error) setError(error.message);
      else setProfile(data);
    }

    getProfile();
    return () => {
      cancelled = true;
    };
  }, [userId]);

  if (error) return <Text style={styles.error}>Error: {error}</Text>;
  if (!profile) return <ActivityIndicator />;

  return (
    <View style={styles.card}>
      <Text style={styles.badge}>PRIVATE</Text>
      <Text style={styles.label}>email</Text>
      <Text style={styles.value}>{profile.email}</Text>
      </View>


  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 8,
    padding: 16,
    gap: 4,
  },
  badge: {
    alignSelf: "flex-start",
    fontSize: 12,
    fontWeight: "bold",
    color: "crimson",
  },
  label: { fontSize: 12, color: "#666", marginTop: 8 },
  value: { fontSize: 18 },
  error: { color: "crimson" },
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
  formBox: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "black",
    padding: 10,
  },
});