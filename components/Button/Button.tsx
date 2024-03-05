import React from "react";
import { useState } from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";

interface ButtonProps {
  backgroundColor?: string;
  label: string;
}
export const Button: React.FunctionComponent<ButtonProps> = ({
  backgroundColor = "#red",
  label = "Press me",
}) => {
  return (
    <View>
      <Pressable style={[styles.button, { backgroundColor }]}>
        <Text style={styles.text}>{label}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 10,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
});
