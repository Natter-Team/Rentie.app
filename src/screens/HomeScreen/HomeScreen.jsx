import React from "react";
import Background from "../../components/Background/Background";
import {View, Text, ScrollView, TouchableNativeFeedback, TouchableWithoutFeedback} from "react-native";
import style from "../HomeScreen/style_HomeScreen";
import TipBox from "../../components/TipBox/TipBox";
import CategoriesCarousel from "../../components/CategoriesCarousel/CategoriesCarousel";

const HomeScreen = () => {
    const categories = ["Papiesz", "Polag", "Jebau", "Mae", "Dziedzi"];

    console.log(CategoriesCarousel.toString());

    return (
        <Background>
            <View style={style.container}>
                <TipBox title="Czy wiedziałeś że..." text="Krzysztof Mącznik ma dwa pesele i urodził sięw samolocie bez obywatelstwa" />
                <Text style={style.header}>Kategorie</Text>
                <CategoriesCarousel categoryList={categories} />
            </View>
        </Background>
    );
}
export default HomeScreen;