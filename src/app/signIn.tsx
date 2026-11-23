import { useState } from "react";
import { ActivityIndicator, Pressable, Text, TextInput, View } from "react-native";
import { Link } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "./../../utils/supabase";
import { router } from "expo-router";
import global from "@/style/global";
import { signinSchema, type SigninForm } from "@/schemas/signIn";

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

        <Text style={global.text}>Email</Text>
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <TextInput
              style={global.input}
              value={field.value}
              onChangeText={field.onChange}
              onBlur={field.onBlur}
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
            />
          )}
        />
        <Text style={global.error}>{errors.email?.message}</Text>

        <Text style={global.text}>Password</Text>
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <TextInput
              style={global.input}
              value={field.value}
              onChangeText={field.onChange}
              onBlur={field.onBlur}
              secureTextEntry
              autoCapitalize="none"
            />
          )}
        />
        <Text style={global.error}>{errors.password?.message}</Text>

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