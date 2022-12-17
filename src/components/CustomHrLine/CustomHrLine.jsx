import { View, Text } from "react-native";
import React from "react";
import style from "../../screens/AccountScreen/style_AccountScreen";
const CustomHrLine = ({ text }) => {
  return (
    <View style={style.horizontalLaneContainer}>
      <View style={style.horizontalLane}></View>
      <Text style={style.HrText}>{text}</Text>
    </View>
  );
};

export default CustomHrLine;
