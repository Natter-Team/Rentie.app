import React from 'react';
import { View, Image, Text } from 'react-native';
import style from './style_TipBox';

export default function TipBox({title, text}) {
    return (
        <View style={style.tipBox}>
            <Image source={require('../../../assets/megafon.png')} style={style.tipBoxImage} />
            <View style={style.tipBoxRight}>
                <Text style={style.tipBoxTitle}>Czy wiedziałeś że...</Text>
                <View style={style.tipBoxLine}/>
                <Text style={style.tipBoxText}>Krzysztof Mącznik ma dwa pesele i urodził się w samolocie bez obywatelstwa.</Text>
            </View>
        </View>
    );
}