import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface ItemProps {
  title?: string;
  body?: string;
}

export const Item: React.FunctionComponent<ItemProps> = ({
  title = "",
  body = "",
}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  body: {
    fontSize: 14,
  },
});
