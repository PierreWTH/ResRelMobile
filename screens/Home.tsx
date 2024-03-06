import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { Item } from "../components/Item/Item";
import axios from "axios";

interface dataProps {
  title: string;
  body: string;
  id: string;
}

export default function Home() {
  const [data, setData] = useState<dataProps[] | null>(null);

  useEffect(() => {
    fetchAPI();
  }, []);

  async function fetchAPI() {
    const data = await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.data);
    setData(data);
  }

  return (
    <FlatList
      contentContainerStyle={styles.container}
      ListHeaderComponent={
        <View>
          <View style={styles.header}>
            <Image
              style={styles.image}
              source={require("../assets/logo.png")}
            />
            <Text>
              Bienvenue sur votre application Ressource Relationnelle !
            </Text>
          </View>
          <Text style={styles.h2}>Les dernieres ressources publiées : </Text>
        </View>
      }
      data={data}
      renderItem={({ item }) => <Item title={item.title} body={item.body} />}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
  header: {
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  h2: {
    fontWeight: "bold",
    fontSize: 16,
  },
  container: {
    padding: 20,
    backgroundColor: "#fff",
    gap: 30,
  },
});
