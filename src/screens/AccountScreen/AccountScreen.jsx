import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  Button,
  TouchableHighlight,
} from "react-native";
import React from "react";
import Background from "../../components/Background/Background";
import style, { localColors } from "./style_AccountScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { local_colors } from "./style_AccountScreen";

const AccountScreen = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const onPressHandler = (e) => {
    if (password.lenght >= 8 && password.lenght <= 32) {
      // if
    }
  };

  return (
    <Background>
      <View style={style.topBox}>
        <Text>logo placeholder</Text>
      </View>
      <View style={style.contentContainer}>
        <Text style={style.header}>Zaloguj się</Text>
        <KeyboardAvoidingView
          behavior="position"
          keyboardVerticalOffset={250}
          style={style.keyboardView}
        >
          {/* <Text>Nazwa uzytkownika</Text> */}
          <Ionicons
            name="ios-person-outline"
            size={28}
            style={{
              top: 40,
              zIndex: 1,
              left: 8,
              width: 28,
            }}
          />
          <TextInput
            style={style.textInput}
            onChangeText={(e) => setUsername(e.target.value)}
            placeholder="Podaj nazwę użytkownika"
          ></TextInput>
          {/* <Text>Hasło</Text> */}
          <Ionicons
            name="ios-lock-closed-outline"
            size={28}
            style={{
              top: 40,
              zIndex: 1,
              left: 8,
              width: 28,
            }}
          />
          <TextInput
            style={style.textInput}
            placeholder="Podaj hasło"
            onChangeText={(e) => setPassword(e.target.value)}
            secureTextEntry={true}
          />
          <TouchableHighlight>
            <Text
              style={style.confirmButton}
              onPress={(e) => onPressHandler(e)}
            >
              {" "}
              Zaloguj się
            </Text>
          </TouchableHighlight>
        </KeyboardAvoidingView>
        <View style={style.horizontalLaneContainer}>
          <View style={style.horizontalLane}></View>
          <Text style={style.HrText}>Lub</Text>
        </View>
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
      </View>
    </Background>
  );
};

export default AccountScreen;
