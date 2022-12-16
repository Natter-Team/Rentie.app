import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <View>
      <Text>Navigator</Text>
    </View>
  );
};

export default Navigator;
