import { StyleSheet, Text, View, Alert } from "react-native";
import { InputText } from "../InputText/InputText";
import { Button } from "../Button/Button";
import { useState } from "react";

export default function CreatePostForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  async function handleForm(title: string, body: string) {
    if (title === "" || body === "") {
      Alert.alert("Erreur", "Veuillez remplir tous les champs");
    }
    // TODO : make a post request to API to create a new post
  }

  return (
    <View>
      <Text style={styles.h1}>Créer un post</Text>
      <InputText
        label="Titre : "
        placeholder="Titre du post"
        onChange={(text) => setTitle(text)}
        value={title}
      />
      <InputText
        height={150}
        label="Contenu : "
        placeholder="Contenu du post"
        multiline
        onChange={(text) => setBody(text)}
        value={body}
      />
      <Button
        label="Créer"
        backgroundColor="black"
        onPress={() => handleForm(title, body)}
      />
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
