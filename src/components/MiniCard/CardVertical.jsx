import React, {useEffect} from "react";
import {Image, StyleSheet, Text, View, ScrollView, TouchableOpacity} from "react-native";
import settings from "../../settings.json";

const style = StyleSheet.create({
    miniCard: {
        backgroundColor: '#fff',
        height: 400,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        margin: 20,
        marginTop: 10,
        marginBottom: 10,
        display: "flex",
        alignItems: "stretch",
        paddingBottom: 20,
    },
    miniCardImage: {
        flex: 1,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    },
    miniCardImagePlaceholder: {
        minWidth: 200,
        height: 250,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        backgroundColor: '#dfdfdf',
    },
    miniCardText: {
        fontSize: 16,
        paddingTop: 20,
        textAlign: 'center',
    },
})

export const CardVertical = (props) => {
    const {id, name, price} = props;

    return (
        <View style={style.miniCard}>
            <Image source={{uri: settings.baseURL + '/api/products/' + id + '/image'}} style={style.miniCardImage}/>
            <Text style={style.miniCardText}>{name}</Text>
            <Text style={style.miniCardText}>{price} zł</Text>
        </View>
    );
}

export const CardVerticalPlaceholder = (props) => {
    return (
        <View style={style.miniCard}>
            <View style={style.miniCardImagePlaceholder}/>
            <Text style={style.miniCardText}></Text>
            <Text style={style.miniCardText}></Text>
        </View>
    );
}

export const CardVerticalCarousel = ({ miniCardList, navigation }) => {
    if (miniCardList.length === 0) {
        return (
            <ScrollView>
                <CardVerticalPlaceholder />
                <CardVerticalPlaceholder />
                <CardVerticalPlaceholder />
                <CardVerticalPlaceholder />
            </ScrollView>
        );
    } else {
        return (
            <View>
                {miniCardList.map((card, i) => (
                    <TouchableOpacity key={card.id} onPress={() => navigation.push('HomeProduct', { productId: card.id })}>
                        <CardVertical id={card.id} name={card.name} price={card.price} />
                    </TouchableOpacity>
                ))}
            </View>
        )
    }
}