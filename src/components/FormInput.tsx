import { Text, TextInput, View } from "react-native";
import { Control, Controller, FieldPath } from "react-hook-form";
import { type signUpFormType } from "@/schemas/signUp";
import global from "@/style/global";

type signUpFormProps = {
  control: Control<signUpFormType>;
  name: FieldPath<signUpFormType>;
  placeholder: string;
  secure?: boolean;
};

export default function FormInput({
  control,
  name,
  secure,
  placeholder,
}: signUpFormProps) {
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
              style={global.formBox}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder={placeholder}
              placeholderTextColor="#999"
              secureTextEntry={secure}
            />
            {error && <Text>{error.message}</Text>}
          </>
        )}
      />
    </View>
  );
}
