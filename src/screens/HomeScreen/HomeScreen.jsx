import React from "react";
import Background from "../../components/Background/Background";
import {View, Text} from "react-native";
import style from "../HomeScreen/style_HomeScreen";
import TipBox from "../../components/TipBox/TipBox";

const HomeScreen = () => {
    return (
        <Background>
            <View style={style.container}>
                <TipBox title="Czy wiedziałeś że..." text="Krzysztof Mącznik ma dwa pesele i urodził sięw samolocie bez obywatelstwa" />
            </View>

        </Background>
    );
}
export default HomeScreen;