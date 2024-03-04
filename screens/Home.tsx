import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { ItemList } from "../components/ItemList/ItemList";

export default function Home() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.image} source={require("../assets/logo.png")} />
          <Text>Bienvenue sur votre application Ressource Relationnelle !</Text>
        </View>
        <Text style={styles.h2}>Les dernieres ressources publiées : </Text>
        <ItemList />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
    gap: 20,
  },
  image: {
    width: 50,
    height: 50,
  },
  header: {
    width: "60%",
    height: "10%",
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  h2: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
