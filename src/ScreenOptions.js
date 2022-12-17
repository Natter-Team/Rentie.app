import React from "react";
import { Image, View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export const screenOptions = ({ route }) => ({
  headerShown: true,
  animation: "slide_from_right",
  tabBarColor: "white",
  headerTitle: "",
  headerLeft: (route) => (
    <Image
      source={require("../assets/projectLogo.png")}
      style={{ marginLeft: 16 }}
    />
  ),
  tabBarIcon: ({ focused, color }) => {
    let iconName;

    if (route.name === "Home") {
      iconName = focused ? "ios-home" : "ios-home-outline";
    } else if (route.name === "Zakładki") {
      iconName = focused ? "ios-bookmarks" : "ios-bookmarks-outline";
    } else if (route.name === "Wypożyczane") {
      iconName = focused ? "ios-notifications" : "ios-notifications-outline";
    } else if (route.name === "Konto") {
      iconName = focused ? "ios-person" : "ios-person-outline";
    } else if (route.name === "Koszyk") {
      iconName = focused ? "ios-cart" : "ios-cart-outline";
    }

    return <Ionicons name={iconName} size={28} color={color} />;
  },
});
