import {  useState } from "react";
import {  Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { supabase } from "./../../utils/supabase";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Control, Controller, FieldPath, useForm } from "react-hook-form";
import { router } from "expo-router";



const formSchema = z
  .object({
    email: z.email("Please input email").trim(),
    password: z.string().min(6, "must be 6 characters").trim(),
    comfirmPass: z.string(),
  })
  .refine((data) => data.password == data.comfirmPass, {
    message: "passwords dont match",
    path: ["comfirmPass"],
  });
type signUpFormType = z.infer<typeof formSchema>;

type signUpFormProps = {
  control: Control<signUpFormType>;
  name: FieldPath<signUpFormType>;
  placeholder: string;
  secure?: boolean;
};



function FormInput({ control, name, secure }: signUpFormProps) {
  return (
    <View>
      <Controller
        control={control}
        name={name}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <>
            <TextInput
              style={styles.formBox}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder={name}
              secureTextEntry={secure}
            />
            {error && <Text>{error.message}</Text>}
          </>
        )}
      />
    </View>
  );
}

export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const { control, handleSubmit } = useForm<signUpFormType>({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
    defaultValues: {
      comfirmPass: "",
      email: "",
      password: "",
    },
  });



  // code should work being rate limited, I dont have perms to disable Confirm email for testing
  async function onSubmit({email, password }: signUpFormType ) {

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
      setNotice("email already exists");
      return;
    }
    
    router.push({
      pathname: "/profile",
    });
  }
  return (
    <View style={styles.card}>
      <View style={[styles.viewBox]}>
      <FormInput
          control={control}
          name="email"
          placeholder="email"
        />
        <FormInput
          control={control}
          name="password"
          placeholder="Password"
          secure
        />
        <FormInput
          control={control}
          name="comfirmPass"
          placeholder="confirm Password"
          secure
        />
        <Pressable
        onPress={handleSubmit(onSubmit)}
        disabled={loading}
        style={styles.signUpButton}
      >
        <Text>Sign Up</Text>
      </Pressable>
      </View>
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
  signUpButton: {
    backgroundColor: "#5a1f69",
    padding: 10,
    borderRadius: 5,
    width: 150,
  },
    viewBox: { flexDirection: "column", gap: 3 },

});