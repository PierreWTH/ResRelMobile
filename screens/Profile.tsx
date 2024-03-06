import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Container } from "../components/Layout/Container";
import CreatePostForm from "../components/Forms/CreatePostForm";
import { Separator } from "../components/Separator";

export default function Create() {
  return (
    <Container>
      <Text style={styles.h1}> Mon profil </Text>
      <Image style={styles.image} source={require("../assets/logo.png")} />
      <Separator />
      <Text> Nom : Pierre</Text>
      <Text> Prénom : WIETRICH </Text>
    </Container>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  image: {
    width: 50,
    height: 50,
  },
  text: {
    fontSize: 15,
  },
});
