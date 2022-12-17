import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screenOptions } from "./ScreenOptions";
import WelcomeScreen from "./screens/WelcomeScreen/WelcomeScreen";
import { StatusBar } from "expo-status-bar";
import defaultStyles, { colors } from "../assets/styles";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountScreen from "./screens/AccountScreen/AccountScreen";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import ProductScreen from "./screens/ProductScreen/ProductScreen";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={screenOptions}
        shifting={true}
        barStyle={{
          backgroundColor: colors.primaryLight,
        }}
        inactiveColor={colors.inactive}
        activeColor={colors.accentLight}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Zakładki" component={ProductScreen} />
        <Tab.Screen name="Koszyk" component={WelcomeScreen} />
        <Tab.Screen name="Wypożyczane" component={WelcomeScreen} />
        <Tab.Screen name="Konto" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
