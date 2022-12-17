import React from "react";
import Background from "../../components/Background/Background";
import {Image, KeyboardAvoidingView, Text, View} from "react-native";
import style from "../HomeScreen/style_HomeScreen";

const HomeScreen = () => {
    return (
        <Background>
            <View style={style.container}>
                <View>
                    <Text>logo placeholder</Text>
                </View>
                <View style={style.tipBox}>
                    {/*<View style={style.tipBoxLeft}>
                        <Image source={require('../../../assets/megafon.png')} style={style.tipBoxImage}/>
                    </View>*/}
                    <Image source={require('../../../assets/megafon.png')} style={style.tipBoxImage} />
                    <View style={style.tipBoxRight}>
                        <Text style={style.tipBoxTitle}>Czy wiedziałeś że...</Text>
                        <View style={style.tipBoxLine}/>
                        <Text style={style.tipBoxText}>Krzysztof Mącznik ma dwa pesele i urodził się w samolocie bez obywatelstwa.</Text>
                    </View>
                </View>
            </View>

        </Background>
    );
}
export default HomeScreen;