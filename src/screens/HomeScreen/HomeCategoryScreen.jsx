import React, { useEffect, useState } from "react";
import Background from "../../components/Background/Background";
import style from "./style_HomeScreen";
import { View, Text, TouchableWithoutFeedback, ScrollView } from "react-native";
import styles from "../../../assets/styles";
import { MiniCardCarousel } from "../../components/MiniCard/MiniCard";
import settings from "../../settings.json";
import { CardVerticalCarousel } from "../../components/MiniCard/CardVertical";

const HomeCategoryScreen = ({route, navigation}) => {
    const { category } = route.params;
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch(settings.baseURL + `/api/products?category=${category}`)
            .then(response => response.json())
            .then(data => { setCards(data.map(card => ({
                id: card._id,
                name: card.name,
                price: card.price,
            }))) });
    }, []);
    
    return (
        <Background>
            <View style={{...style.container, paddingBottom: 115}}>
                <ScrollView>
                    <View style={{display: "flex", flexDirection: "row", padding: 10, paddingLeft: 20, paddingRight: 20}}>
                        <TouchableWithoutFeedback onPress={() => navigation.goBack()}><Text style={{color: "#7878ff"}}>Wróć</Text></TouchableWithoutFeedback>
                        <Text style={{paddingLeft: 20}}>Wyniki: {category}</Text>
                    </View>
                    <Text style={style.header}>Wyniki wyszukiwania</Text>
                    <CardVerticalCarousel miniCardList={cards} navigation={navigation} />
                </ScrollView>
            </View>
        </Background>
    );
}

export default HomeCategoryScreen;