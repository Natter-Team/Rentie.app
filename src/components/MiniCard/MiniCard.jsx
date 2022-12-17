import React, {useEffect} from "react";
import {Image, Text, View} from "react-native";
import settings from "../../settings.json";

const MiniCard = (props) => {
    const {id, name} = props;
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
            <Image source={{uri: settings.baseURL + '/api/products/' + id + '/image'}} style={{
                width: 150,
                height: 150,
            }}/>
            <Text style={{
                fontSize: 16,
                height: 50,
                textAlign: 'left',
            }}>{name}</Text>
        </View>
    );
}
export default MiniCard;