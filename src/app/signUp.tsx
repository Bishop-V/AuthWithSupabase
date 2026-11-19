import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Pressable,
  Appearance,
  useColorScheme,
  TextInput,
} from "react-native";

import global from "@/style/global";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, type SignUpForm } from "../schemas/signUp";

export default function SignUp() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpForm>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  return (
    <View style={[styles.main]}>
      <View style={styles.content}>
        <Text style={global.text}>Username</Text>

        <Controller
          control={control}
          name="username"
          render={({ field }) => (
            <TextInput
              style={global.input}
              onChangeText={field.onChange}
              value={field.value}
              onBlur={field.onBlur}
            />
          )}
        />

        <Text style={global.error}>{errors.username?.message}</Text>

        <Text style={global.text}>Password</Text>

        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <TextInput
              style={global.input}
              onChangeText={field.onChange}
              value={field.value}
              onBlur={field.onBlur}
              secureTextEntry
            />
          )}
        />

        <Text style={global.error}>{errors.password?.message}</Text>

        <Text style={global.text}>Confirm Password</Text>

        <Controller
          control={control}
          name="confirmPassword"
          render={({ field }) => (
            <TextInput
              style={global.input}
              onChangeText={field.onChange}
              value={field.value}
              onBlur={field.onBlur}
              secureTextEntry
            />
          )}
        />

        <Text style={global.error}>{errors.confirmPassword?.message}</Text>

        <Pressable style={global.button}>
          <Text>Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "black",
    flex: 1,
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
