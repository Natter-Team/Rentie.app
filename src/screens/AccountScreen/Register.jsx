import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableHighlight,
} from "react-native";
import React, { useState } from "react";
import style from "./style_AccountScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import CustomHrLine from "../../components/CustomHrLine/CustomHrLine";
import CustomLoginBox from "../../components/CustomLoginBox/CustomLoginBox";

const Register = ({ set2 }) => {
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [username, setUsername] = useState("");
  const [apiResponse, setApiResponse] = useState("");

  const onCreateAccountPressHandle = () => {
    console.log("click");
    set2(true);
  };
  return (
    <View style={style.contentContainer}>
      <Text style={style.header}>Zarejestruj się</Text>
      <KeyboardAvoidingView behavior="position" style={style.keyboardView}>
        <View style={{ position: "relative" }}>
          <Text style={{ marginBottom: 15 }}>Nazwa uzytkownika</Text>
          <Ionicons
            name="ios-person-outline"
            size={28}
            style={{
              top: 40,
              zIndex: 1,
              left: 8,
              width: 28,
              position: "absolute",
            }}
          />
          <TextInput
            style={style.textInput}
            onChangeText={(e) => setUsername(e)}
            placeholder="Podaj nazwę użytkownika"
          ></TextInput>
        </View>
        <View styl={{ position: "relative" }}>
          <Text style={{ marginBottom: 15, marginTop: 10 }}>Hasło</Text>
          <Ionicons
            name="ios-lock-closed-outline"
            size={28}
            style={{
              top: 50,
              zIndex: 1,
              left: 8,
              width: 28,
              position: "absolute",
            }}
          />
          <TextInput
            style={style.textInput}
            placeholder="Podaj hasło"
            onChangeText={(e) => setPassword(e)}
            secureTextEntry={true}
          />
        </View>
        <View styl={{ position: "relative" }}>
          <Text style={{ marginBottom: 15, marginTop: 10 }}>Powtórz hasło</Text>
          <Ionicons
            name="ios-lock-closed-outline"
            size={28}
            style={{
              top: 50,
              zIndex: 1,
              left: 8,
              width: 28,
              position: "absolute",
            }}
          />
          <TextInput
            style={style.textInput}
            placeholder="Powtórz hasło"
            onChangeText={(e) => setRepeatedPassword(e)}
            secureTextEntry={true}
          />
        </View>
        <TouchableHighlight style={style.confirmButton}>
          <Text
            style={style.confirmButtonText}
            // onPress={(e) => onPressHandler(e)}
          >
            Zarejestruj się
          </Text>
        </TouchableHighlight>
      </KeyboardAvoidingView>

      <CustomHrLine text="Lub" />

      <CustomLoginBox type="fb" />
      {/* <CustomLoginBox type="apple" /> */}

      <CustomHrLine text="Masz już konto?" />

      <CustomLoginBox
        type="login"
        styles={{ marginTop: 0 }}
        onPress={onCreateAccountPressHandle}
      />
    </View>
  );
};

export default Register;
