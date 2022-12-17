import React, { useEffect, useState } from "react";
import Background from "../../components/Background/Background";
import {View, Text, ScrollView, TextInput, TouchableNativeFeedback, TouchableWithoutFeedback} from "react-native";
import style from "../HomeScreen/style_HomeScreen";
import TipBox from "../../components/TipBox/TipBox";
import CategoriesCarousel from "../../components/CategoriesCarousel/CategoriesCarousel";
import { MiniCard, MiniCardCarousel, MiniCardPlaceholder } from "../../components/MiniCard/MiniCard";
import settings from "../../settings.json";

const HomeHomeScreen = ({navigation}) => {
    const [categories, setCategories] = useState([]);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch(settings.baseURL + `/api/products/categories`)
            .then(response => response.json())
            .then((data) => { setCategories(data.map(category => category.name)) });
    }, []);

    useEffect(() => {
        fetch(settings.baseURL + `/api/products`)
            .then(response => response.json())
            .then(data => { setCards(data.map(card => ({
                id: card._id,
                name: card.name,
                price: card.price,
            }))) });
    }, []);

    return (
        <Background>
            <View style={style.container}>
                <ScrollView style={style.mainScroll}>
                    <TipBox title="Czy wiedziałeś że..." text="Wypożyczanie sprzętu jest dużo bardziej opłacalne od kupna na własność?" />
                    <Text style={style.header}>Kategorie</Text>
                    <CategoriesCarousel categoryList={categories} navigation={navigation} />
                    <Text style={style.header}>Popularne w okolicy</Text>
                    <MiniCardCarousel miniCardList={cards} navigation={navigation} />
                </ScrollView>
            </View>
        </Background>
    );
}
export default HomeHomeScreen;