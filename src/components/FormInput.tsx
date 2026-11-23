import { Text, TextInput, View } from "react-native";
import { Control, Controller, FieldPath } from "react-hook-form";
import { type signUpFormType } from "@/schemas/signUp";
import global from "@/style/global";

type signUpFormProps = {
  label: string;
  control: Control<signUpFormType>;
  name: FieldPath<signUpFormType>;
  placeholder: string;
  secure?: boolean;
};

export default function FormInput({
  label,
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
