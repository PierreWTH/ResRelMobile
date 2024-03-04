import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import Home from "../../screens/Home";
import { Separator } from "../Separator/Separator";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

type TabsType = {
  Home: undefined;
};

export function Tabs() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Create"
        component={Separator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="post-add" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Separator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="gear" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
