import React from "react";
import {Image, Text, View} from "react-native";

const MiniCard = (props) => {
    return (
        <View style={{
            backgroundColor: '#fff',
            width: 150,
            height: 200,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            marginRight: 20,
        }}>
            <Image source={props.imgSource} style={{
                width: 150,
                height: 150,
            }}/>
            <Text style={{
                fontSize: 16,
                height: 50,
                textAlign: 'left',
            }}>{props.name}</Text>
        </View>
    );
}
export default MiniCard;