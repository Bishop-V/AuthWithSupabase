import { useState } from "react";
import { ActivityIndicator, Pressable, Text, TextInput, View } from "react-native";
import { Link } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "./../../utils/supabase";
import { router } from "expo-router";
import global from "@/style/global";
import { signinSchema, type SigninForm } from "@/schemas/signIn";
import SignInInput from "@/components/SignInInput";

export default function SignIn() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninForm>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async ({ email, password }: SigninForm) => {
    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setError(error.message);
    } catch {
      setError("Can't reach the server. Check your connection and try again.");
    } finally {
      setLoading(false);
    }
    router.push({
      pathname: "/profile",
    });
  };

  return (
    <View style={global.main}>
      <View style={global.content}>
        {error && <Text style={global.error}>{error}</Text>}

        <SignInInput
          label="Email"
          control={control} 
          name="email" 
          placeholder="Email" 
        />
        
        <SignInInput
          label="Password"
          control={control}
          name="password"
          placeholder="Password"
          secure
        />

        <Pressable style={global.button} onPress={handleSubmit(onSubmit)} disabled={loading}>
          {loading ? <ActivityIndicator /> : <Text>Sign in</Text>}
        </Pressable>

        <Link href="/signUp" style={global.text}>
          Sign up
        </Link>
      </View>
    </View>
  );
}