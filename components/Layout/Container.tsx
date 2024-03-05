import React from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

interface ContainerProps {
  children: React.ReactNode;
}
export const Container: React.FunctionComponent<ContainerProps> = ({
  children,
}) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
    gap: 20,
  },
});
