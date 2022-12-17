import {View, Text, ScrollView} from "react-native";
import React from "react";
import Background from "../../components/Background/Background";
import MiniCard from "../../components/MiniCard/MiniCard";

const WelcomeScreen = () => {
  return (
    <Background>
        <View>
            <Text>Popularne w okolicy</Text>
            <ScrollView horizontal={true}>
                <MiniCard imgSource={'../../../assets/megafon.png'} name={"aaa"} />
                <MiniCard/>
                <MiniCard/>
                <MiniCard/>
            </ScrollView>
        </View>
    </Background>
  );
};

export default WelcomeScreen;
