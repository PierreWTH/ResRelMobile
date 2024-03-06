import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { InputText } from "../InputText/InputText";
import { Button } from "../Button/Button";

export default function CreatePostForm() {
  function handleForm() {}

  return (
    <View>
      <Text style={styles.h1}>Créer un post</Text>
      <InputText label="Titre : " />
      <InputText height={150} label="Contenu : " />
      <Button label="Créer" backgroundColor="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
