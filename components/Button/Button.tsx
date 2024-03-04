import React from "react";
import { useState } from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";

interface ButtonProps {
  color?: string;
  text: string;
}
export const Button: React.FunctionComponent<ButtonProps> = ({
  color = "#red",
  text = "Press me",
}) => {
  const [count, setCount] = useState(0);

  const onPress = () => {
    setCount(count + 1);
  };

  return (
    <View>
      <Text>{count}</Text>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 10,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
});
