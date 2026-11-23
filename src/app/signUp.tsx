import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { supabase } from "./../../utils/supabase";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm , Controller} from "react-hook-form";
import { router } from "expo-router";
import global from "@/style/global";
import { formSchema, type signUpFormType } from "@/schemas/signUp";
import FormInput from "@/components/FormInput";

export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
    defaultValues: {
      confirmPass: "",
      email: "",
      password: "",
    },
  });

  // code should work being rate limited, I dont have perms to disable Confirm email for testing
  async function onSubmit({ email, password }: signUpFormType) {
    setLoading(true);
    setError(null);
    setNotice(null);

    const { data, error } = await supabase.auth.signUp({ email, password });
    console.log("signUp result:", { data, error });
    setLoading(false);
    if (error) {
      setError(error.message);
      return;
    } else if (!data.session) {
      setNotice("Email already exists");
      return;
    }

    router.push({
      pathname: "/profile",
    });
  }
  return (
    <View style={global.page}>
      <View style={global.card}>
        <View style={global.viewBox}>
          <FormInput 
            control={control} 
            name="email" 
            placeholder="Email" 
          />
          <FormInput
            control={control}
            name="password"
            placeholder="Password"
            secure
          />
          <FormInput
            control={control}
            name="confirmPass"
            placeholder="Confirm password"
            secure
          />
          <Pressable
            onPress={handleSubmit(onSubmit)}
            disabled={loading}
            style={global.signUpButton}
          >
            <Text>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
