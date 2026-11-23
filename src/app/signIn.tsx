import { useState } from "react";
import { ActivityIndicator, Pressable, Text, View } from "react-native";
import { Link } from "expo-router";
import { useForm } from "react-hook-form";
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
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        setError(error.message);
        return;
      }
      router.push({
        pathname: "/profile",
      });
    } catch {
      setError("Can't reach the server. Check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={global.page}>
      <View style={global.card}>
        <View style={global.viewBox}>
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

          <Pressable
            style={global.signInButton}
            onPress={handleSubmit(onSubmit)}
            disabled={loading}
          >
            {loading ? <ActivityIndicator /> : <Text>Sign in</Text>}
          </Pressable>

          <Link href="/signUp" style={[global.text, global.signUpRedirect]}>
            Sign up
          </Link>
        </View>
      </View>
    </View>
  );
}
