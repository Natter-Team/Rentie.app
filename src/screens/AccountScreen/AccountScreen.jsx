import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  Button,
  TouchableHighlight,
  Alert,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import Background from "../../components/Background/Background";
import style, { localColors } from "./style_AccountScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { local_colors } from "./style_AccountScreen";

const AccountScreen = (props) => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [apiResponse, setApiResponse] = useState("");
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

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
    <Background>
      <View style={style.topBox}>
        {/* <Image
          source={require("../../../assets/projectLogo.png")}
          style={{ marginLeft: 16, marginTop: 16 }}
        /> */}
      </View>
      {!isUserLoggedIn ? (
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
              onChangeText={(e) => setUsername(e)}
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
              onChangeText={(e) => setPassword(e)}
              secureTextEntry={true}
            />
            <TouchableHighlight>
              <Text
                style={style.confirmButton}
                // onPress={(e) => onPressHandler(e)}
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
      ) : (
        <Text>Zalogowany</Text>
      )}
    </Background>
  );
};

export default AccountScreen;
