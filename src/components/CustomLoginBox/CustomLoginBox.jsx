import { View, Text } from "react-native";
import React from "react";
import style, {
  localColors,
} from "../../screens/AccountScreen/style_AccountScreen";
import Ionicons from "@expo/vector-icons/Ionicons";

const CustomLoginBox = ({ type, onPress }) => {
  const types = {
    fb: {
      color: localColors.fbColor,
      text: "Kontynuuj z Facebookiem",
      iconName: "logo-facebook",
    },
    apple: {
      color: localColors.appleColor,
      text: "Kontynuuj z Apple",
      iconName: "logo-apple",
    },
    register: {
      color: localColors.appleColor,
      text: "Utwórz konto",
      iconName: "ios-create",
    },
    login: {
      color: localColors.appleColor,
      text: "Zaloguj się",
      iconName: "ios-create-outline",
    },
  };

  return (
    <View style={style.customLoginBox}>
      <Ionicons
        name={types[type].iconName}
        size={28}
        color={types[type].color}
        style={{
          marginRight: 8,
        }}
      />
      <Text onPress={onPress}>{types[type].text}</Text>
    </View>
  );
};

export default CustomLoginBox;
