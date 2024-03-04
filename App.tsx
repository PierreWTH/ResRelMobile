import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { Separator } from "./components/Separator/Separator";
import { Button } from "./components/Button/Button";

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./assets/logo.png")} />
      <Separator />
      <Text> Hello World </Text>
      <StatusBar style="auto" />
      <Button text="Hello" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
});
