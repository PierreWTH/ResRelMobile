import React from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

interface InputTextProps {
  height?: number;
  label: string;
  placeholder?: string;
  multiline?: boolean;
  value?: string;
  onChange?: (text: string) => void;
}

export const InputText: React.FunctionComponent<InputTextProps> = ({
  height = 40,
  label,
  placeholder,
  multiline = false,
  value,
  onChange,
}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.textInput, { height }]}
        placeholder={placeholder}
        textAlignVertical="top"
        multiline={multiline}
        onChangeText={onChange}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    minWidth: "100%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  label: {
    fontWeight: "bold",
  },
});
