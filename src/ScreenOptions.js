import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../assets/styles";

export const screenOptions = ({ route }) => ({
  headerShown: true,
  animation: "slide_from_right",
  tabBarColor: "white",
  headerTitle: route.name,

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
    }

    return <Ionicons name={iconName} size={28} color={color} />;
  },
});
