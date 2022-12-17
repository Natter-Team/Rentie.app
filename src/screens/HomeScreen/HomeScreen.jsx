import React from "react";
import Background from "../../components/Background/Background";
import {Image, KeyboardAvoidingView, Text, View} from "react-native";
import style from "../AccountScreen/style_AccountScreen";

const HomeScreen = () => {
    return (
        <Background>
            <View>
                <Text>logo placeholder</Text>
            </View>
            <View style={style.tipBox}>
                <View style={style.tipBoxLeft}>
                    <Image source={require('../../../assets/megafon.png')} style={style.tipBoxImage}/>
                </View>
                <View style={style.tipBoxRight}>
                    <Text style={style.tipBoxTitle}>Czy wiedziałeś że...</Text>
                    <Text style={style.tipBoxText}>Tę aplikację zaprogramowało {"\n"} tylko 6 programistów w 24 godziny.</Text>
                </View>
            </View>
        </Background>
    );
}
export default HomeScreen;