import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export const screenOptions = ({ route }) => ({
  headerShown: false,
  animation: "slide_from_right",
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

    return <Ionicons name={iconName} size={24} color={color} />;
  },
});
