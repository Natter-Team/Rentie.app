import React, { useEffect, useState } from "react";
import Background from "../../components/Background/Background";
import {View, Text, ScrollView, TextInput, TouchableNativeFeedback, TouchableWithoutFeedback} from "react-native";
import style from "../HomeScreen/style_HomeScreen";
import TipBox from "../../components/TipBox/TipBox";
import CategoriesCarousel from "../../components/CategoriesCarousel/CategoriesCarousel";
import { MiniCard, MiniCardCarousel, MiniCardPlaceholder } from "../../components/MiniCard/MiniCard";
import settings from "../../settings.json";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeHomeScreen from "./HomeHomeScreen";
import HomeCategoryScreen from "./HomeCategoryScreen";

const HomeStack = createNativeStackNavigator();
const HomeScreen = () => {
    return (
        <HomeStack.Navigator screenOptions={{headerShown: false }}>
            <HomeStack.Screen name="HomeHome" component={HomeHomeScreen} />
            <HomeStack.Screen name="HomeCategory" component={HomeCategoryScreen} />
        </HomeStack.Navigator>
    )
}
export default HomeScreen;