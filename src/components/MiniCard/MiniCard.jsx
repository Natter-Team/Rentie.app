import React, {useEffect} from "react";
import {Image, Text, View} from "react-native";
import settings from "../../settings.json";

const MiniCard = (props) => {
    const {id, name, price} = props;
    return (
        <View style={{
            backgroundColor: '#fff',
            width: 200,
            height: 200,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            marginRight: 20,
        }}>
            <Image source={{uri: settings.baseURL + '/api/products/' + id + '/image'}} style={{
                minWidth: 200,
                height: 150,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
            }}/>
            <Text style={{
                fontSize: 16,
                height: 25,
                textAlign: 'left',
            }}>{name}</Text>
            <Text style={{
                fontSize: 16,
                height: 25,
                textAlign: 'left',
            }}>{price}</Text>
        </View>
    );
}
export default MiniCard;