import { View, TextInput, Text } from "react-native";
import { Control, Controller, FieldPath } from "react-hook-form";
import { type SigninForm } from "@/schemas/signIn";
import global from "@/style/global";

type signInFormProps = {
  label: string;
  control: Control<SigninForm>;
  name: FieldPath<SigninForm>;
  placeholder: string;
  secure?: boolean;
};

export default function SignInInput({
  label,
  control,
  name,
  secure,
  placeholder,
}: signInFormProps) {
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
            <Text style={global.label}>{label}</Text>
            <TextInput
              style={[global.formBox, error && global.formBoxError]}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder={placeholder}
              placeholderTextColor="#999"
              secureTextEntry={secure}
            />
            {
              error && 
              <Text
                style={global.error} 
              >
                {error.message}
              </Text>
            }
          </>
        )}
      />
    </View>
  );
}