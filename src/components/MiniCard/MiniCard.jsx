import React, {useEffect} from "react";
import {Image, StyleSheet, Text, View, ScrollView, TouchableWithoutFeedback, TouchableNativeFeedback, TouchableOpacity} from "react-native";
import settings from "../../settings.json";

const style = StyleSheet.create({
    miniCard: {
        backgroundColor: '#fff',
        width: 200,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginRight: 20,
    },
    miniCardFirst: {
        backgroundColor: '#fff',
        width: 200,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        marginRight: 20,
        marginLeft: 20,
    },
    miniCardImage: {
        minWidth: 200,
        height: 150,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    },
    miniCardImagePlaceholder: {
        minWidth: 200,
        height: 150,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        backgroundColor: '#dfdfdf',
    },
    miniCardText: {
        fontSize: 16,
        height: 25,
        textAlign: 'left',
    },
})

export const MiniCard = (props) => {
    const {id, name, price} = props;
    const first = props.first || false;

    const miniCardStyle = 
        props.first ? style.miniCardFirst : style.miniCard;

    return (
        <View style={miniCardStyle}>
            <Image source={{uri: settings.baseURL + '/api/products/' + id + '/image'}} style={style.miniCardImage}/>
            <Text style={style.miniCardText}>{name}</Text>
            <Text style={style.miniCardText}>{price} zł</Text>
        </View>
    );
}

export const MiniCardPlaceholder = (props) => {
    const first = props.first || false;

    const miniCardStyle = 
        props.first ? style.miniCardFirst : style.miniCard;

    return (
        <View style={miniCardStyle}>
            <View style={style.miniCardImagePlaceholder}/>
            <Text style={style.miniCardText}></Text>
            <Text style={style.miniCardText}></Text>
        </View>
    );
}

export const MiniCardCarousel = ({ miniCardList, navigation }) => {
    if (miniCardList.length === 0) {
        return (
            <ScrollView horizontal={true}>
                <MiniCardPlaceholder first={true} />
                <MiniCardPlaceholder />
                <MiniCardPlaceholder />
                <MiniCardPlaceholder />
            </ScrollView>
        );
    } else {
        return (
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {miniCardList.map((card, i) => (
                    <TouchableOpacity key={card.id} onPress={() => {navigation.push('HomeProduct', {productId: card.id})}}>
                        <MiniCard id={card.id} name={card.name} price={card.price} first={i === 0} />
                    </TouchableOpacity>
                ))}
            </ScrollView>
        )
    }
}