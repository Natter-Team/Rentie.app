import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screenOptions } from "./ScreenOptions";
import WelcomeScreen from "./screens/WelcomeScreen/WelcomeScreen";
import { StatusBar } from "expo-status-bar";
import defaultStyles, { colors } from "../assets/styles";

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator screenOptions={screenOptions} initialRouteName="Home">
        <Stack.Screen name="App" component={TabNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function TabNav() {
  // const { t } = useTranslation();

  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      shifting={true}
      barStyle={{ backgroundColor: colors.primaryLight }}
      inactiveColor={colors.inactive}
      activeColor={colors.accentLight}
      color={colors.accentLight}
    >
      <Tab.Screen name="Home" component={WelcomeScreen} />
      <Tab.Screen name="Zakładki" component={WelcomeScreen} />
      {Platform.OS === "ios" && (
        <Tab.Screen name="Wypożyczane" component={WelcomeScreen} />
      )}
      <Tab.Screen name="Konto" component={WelcomeScreen} />
    </Tab.Navigator>
  );
}

export default Navigator;
