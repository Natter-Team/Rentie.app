import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableHighlight,
} from "react-native";
import React, { useEffect, useState } from "react";
import style from "./style_AccountScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import CustomHrLine from "../../components/CustomHrLine/CustomHrLine";
import CustomLoginBox from "../../components/CustomLoginBox/CustomLoginBox";

const Register = ({ set2, props }) => {
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [username, setUsername] = useState("");
  const [apiResponse, setApiResponse] = useState("");

  const onCreateAccountPressHandle = () => {
    console.log("click");
    set2(true);
  };

  const onRegisterPressHandler = () => {
    const dataFetch = fetch(
      `${settings.baseURL}/api/auth/register`,
      {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({
          login: username,
          password: password,
          passwordConfirm: repeatedPassword,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.status)
      .then((data) => {
        setApiResponse(data);
      })
      .catch((err) => {
        throw err;
      });
  };
  useEffect(() => {
    if (apiResponse === 201) {
      Alert.alert(
        "Zalogowano",
        "Pomyślnie zarejestrowano konto! Możesz się teraz zalogować.",
        [
          {
            text: "OK",
            onPress: () => set2(true),
            style: "cancel",
          },
        ]
      );
    } else {
      Alert.alert(
        "Błąd logowania",
        "Hasło jest zbyt słabe bądź nie zgadzają się one.",
        [
          {
            text: "OK",
            style: "cancel",
          },
        ]
      );
    }
  }, [apiResponse]);

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
            onPress={(e) => onRegisterPressHandler(e)}
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
