import { View, Text, TouchableOpacity, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import Background from "../../components/Background/Background";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
import style from "./style_AccountScreen";
import CustomHrLine from "../../components/CustomHrLine/CustomHrLine";
import Ionicons from "@expo/vector-icons/Ionicons";

const ProfileInformation = ({ props, setLogin }) => {
  const [profileInfo, setProfileInfo] = useState({});

  const getProfileInfo = async () => {
    const token = await AsyncStorage.getItem("token");
    const decoded = await jwt_decode(token);

    setProfileInfo(decoded);
    // console.log(decoded);
  };
  useEffect(() => {
    // console.log("useEffect");
    getProfileInfo();
  }, []);

  const accountSettings = [
    ["ios-person-outline", "Moje dane"],
    ["chatbubble-ellipses-outline", "Moje opinie"],
    ["cube-outline", "Moje zamówienia"],
    ["exit-outline", "Wyloguj się"],
  ];
  const applicationSettings = [
    ["settings-outline", "Ustawienia aplikacji"],
    ["notifications-outline", "Historia powiadomień"],
    ["notifications-circle-outline", "Ustawienia powiadomień"],
  ];

  const helpSettings = [
    ["md-open-outline", "O nas"],
    ["chatbubbles-outline", "Centrum pomocy"],
    ["call-outline", "Skontaktuj się z nami"],
  ];

  return (
    <Background>
      <View>
        <Text style={style.header}>
          Witaj, {profileInfo.login && profileInfo.login}!{" "}
        </Text>
      </View>
      <CustomHrLine text="Ustawienia konta" />
      {accountSettings.map((item, index) => {
        return (
          <TouchableOpacity
            onPress={() => {
              if (item[1] === "Wyloguj się") {
                AsyncStorage.removeItem("token");
                setLogin(false);
                Alert.alert("Wylogowano", "Pomyślnie wylogowano z konta!", [
                  {
                    text: "OK",
                    // onPress: () => props.navigation.navigate("Home"),
                    style: "cancel",
                  },
                ]);
                // console.log("logout");
              }
            }}
          >
            <View style={style.settingsContainer} key={index}>
              <View
                style={style.viewWrapper}
                onPress={() => {
                  if (item[1] === "Wyloguj się") {
                    console.log("logout");
                  }
                }}
              >
                <Ionicons
                  name={item[0]}
                  size={24}
                  color={(item[1] === "Wyloguj się" && "red") || "black"}
                  class={style.iconUserPanel}
                />
                <Text
                  style={[
                    style.settingsText,
                    item[1] === "Wyloguj się" && style.logoutText,
                  ]}
                >
                  {item[1]}
                </Text>
              </View>
              {item[1] !== "Wyloguj się" && (
                <Ionicons
                  name={"chevron-forward-outline"}
                  size={24}
                  color="black"
                  class={style.iconUserPanelArrow}
                />
              )}
            </View>
          </TouchableOpacity>
        );
      })}
      <CustomHrLine text="Ustawienia aplikacji" />
      {applicationSettings.map((item, index) => {
        return (
          <View style={style.settingsContainer} key={index}>
            <View style={style.viewWrapper}>
              <Ionicons
                name={item[0]}
                size={24}
                color="black"
                class={style.iconUserPanel}
              />
              <Text style={style.settingsText}>{item[1]}</Text>
            </View>
            <Ionicons
              name={"chevron-forward-outline"}
              size={24}
              color="black"
              class={style.iconUserPanelArrow}
            />
          </View>
        );
      })}
      <CustomHrLine text="Pomoc" />
      {helpSettings.map((item, index) => {
        return (
          <View style={style.settingsContainer} key={index}>
            <View style={style.viewWrapper}>
              <Ionicons
                name={item[0]}
                size={24}
                color="black"
                class={style.iconUserPanel}
              />
              <Text style={style.settingsText}>{item[1]}</Text>
            </View>
            <Ionicons
              name={"chevron-forward-outline"}
              size={24}
              color="black"
              class={style.iconUserPanelArrow}
            />
          </View>
        );
      })}
      <Text style={{ textAlign: "center", fontSize: 8 }}>Wersja 1.0.0</Text>
    </Background>
  );
};

export default ProfileInformation;
