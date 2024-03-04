import React from "react";
import { View, Text } from "react-native";

interface ItemListProps {
  items?: Array<Item>;
}

interface Item {
  title: string;
  description: string;
}

export const ItemList: React.FunctionComponent<ItemListProps> = ({
  items = [
    {
      title: "Le droit a la déconnexion",
      description:
        "Comment déconnecter totalement en rentrant du boulot en 5 étapes",
    },
    {
      title: "Batch cooking",
      description:
        "La meilleur façon de préparer ses repas pour la semaine et manger sainement",
    },
    {
      title: "Le harcélement au travail",
      description:
        "Reconnaitre le harcélement au travail en 5 éléments clés : analyse d'une situation classique",
    },
    {
      title: "Le droit a la déconnexion",
      description:
        "Comment déconnecter totalement en rentrant du boulot en 5 étapes",
    },
    {
      title: "Batch cooking",
      description:
        "La meilleur façon de préparer ses repas pour la semaine et manger sainement",
    },
    {
      title: "Le harcélement au travail",
      description:
        "Reconnaitre le harcélement au travail en 5 éléments clés : analyse d'une situation classique",
    },
  ],
}) => {
  return (
    <View style={styles.list}>
      {items.map((item) => {
        return (
          <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = {
  list: {
    width: "100%",
    flexDirection: "column",
    gap: 20,
  },
  item: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "black",
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 10,
  },
};
