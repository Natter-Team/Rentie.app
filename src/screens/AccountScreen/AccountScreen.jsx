import { View, Text } from "react-native";
import React from "react";
import Background from "../../components/Background/Background";
import style, { localColors } from "./style_AccountScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { local_colors } from "./style_AccountScreen";

const AccountScreen = () => {
  return (
    <Background>
      <View style={style.topBox}>
        <Text>logo placeholder</Text>
      </View>
      <View style={style.contentContainer}>
        <Text style={style.header}>Zaloguj się</Text>
        <View style={style.customLoginBox}>
          <Ionicons
            name="logo-facebook"
            size={28}
            color={localColors.fbColor}
            style={{
              marginRight: 8,
            }}
          />
          <Text>Kontynuuj z Facebookiem</Text>
        </View>
        <View style={style.customLoginBox}>
          <Ionicons
            name="logo-apple"
            size={28}
            color={localColors.appleColor}
            style={{
              marginRight: 8,
            }}
          />
          <Text>Kontynuuj z Apple</Text>
        </View>
        <View>
          <View style={style.horizontalLane}></View>
          <Text style={style.HrText}>Lub</Text>
        </View>
      </View>
    </Background>
  );
};

export default AccountScreen;
