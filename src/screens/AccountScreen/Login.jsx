import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableHighlight,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import Background from "../../components/Background/Background";
import style, { localColors } from "./style_AccountScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomLoginBox from "../../components/CustomLoginBox/CustomLoginBox";
import CustomHrLine from "../../components/CustomHrLine/CustomHrLine";
const Login = ({ set, set2 }) => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [apiResponse, setApiResponse] = useState("");
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const onCreateAccountPressHandle = () => {
    console.log("click");
    set2(false);
  };
  //   const dataFetch = fetch("http://192.168.38.92:8000/api/register",
  // {
  // body: { login: login, password: password, passwordConfirm: password2 }

  // }

  const onPressHandler = (e) => {
    const dataFetch = fetch("http://192.168.38.92:8000/api/auth/login", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({ login: username, password: password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setApiResponse(data);
      })
      .catch((err) => {
        throw err;
      });
  };

  const checkIfUserIsLoggedIn = async () => {
    // AsyncStorage.removeItem("token");

    try {
      const token = await AsyncStorage.getItem("token");
      if (token !== null) {
        setIsUserLoggedIn(true);
        set(true);
      }
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    checkIfUserIsLoggedIn();
  }, []);

  const updateAsyncStorage = async () => {
    try {
      await AsyncStorage.setItem("token", apiResponse.token);
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    if (username.length > 0 && password.length > 0) {
      if (apiResponse.token) {
        updateAsyncStorage();
        Alert.alert("Zalogowano", "Pomyślnie zalogowano do konta!", [
          {
            text: "OK",
            onPress: () => props.navigation.navigate("Home"),
            style: "cancel",
          },
        ]);
      } else {
        Alert.alert(
          "Błąd logowania",
          "Niepoprawna nazwa użytkownika lub hasło",
          [
            {
              text: "OK",
              style: "cancel",
            },
          ]
        );
      }
    }
  }, [apiResponse]);

  return (
    <View style={style.contentContainer}>
      <Text style={style.header}>Zaloguj się</Text>
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
        <TouchableHighlight style={style.confirmButton}>
          <Text
            style={style.confirmButtonText}
            // onPress={(e) => onPressHandler(e)}
          >
            Zaloguj się
          </Text>
        </TouchableHighlight>
      </KeyboardAvoidingView>

      <CustomHrLine text="Lub" />

      <CustomLoginBox type="fb" />
      <CustomLoginBox type="apple" />

      <CustomHrLine text="Nie masz konta?" />

      <CustomLoginBox
        type="register"
        styles={{ marginTop: 0 }}
        onPress={onCreateAccountPressHandle}
      />
    </View>
  );
};

export default Login;
