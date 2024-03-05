import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Container } from "../components/Layout/Container";
import CreatePostForm from "../components/Forms/CreatePostForm";

export default function Create() {
  return (
    <Container>
      <CreatePostForm />
    </Container>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
