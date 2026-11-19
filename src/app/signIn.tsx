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
import { loginSchema, type LoginForm } from "@/schemas/login";

export default function SignIn() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginForm) => {
    // Authenticate the user here.
  };

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
              value={field.value}
              onChangeText={field.onChange}
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
              value={field.value}
              onChangeText={field.onChange}
              onBlur={field.onBlur}
              secureTextEntry
            />
          )}
        />

        <Text style={global.error}>{errors.password?.message}</Text>

        <Pressable style={global.button} onPress={handleSubmit(onSubmit)}>
          <Text>Sign in</Text>
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
