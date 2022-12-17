import React from "react";
import {Image, Text, View} from "react-native";
import style from "./style_ProductScreen";
import Background from "../../components/Background/Background";
import Tag from "../../components/Tag/Tag";
import Description from "../../components/Description/Description";

const ProductScreen = () => {
    return (
        <Background>
            <View style={style.container}>
                <Image source={require('../../../assets/unsplash_GtbE_1zPmZ8.png')} style={style.image}/>
                <View style={style.header}>
                    <Text style={style.title}>Piła mechaniczna</Text>
                    <View style={style.tags}>
                       <Tag text="Kategoria 1"/><Tag text="Kategoria 2"/><Tag text="Kategoria 3"/>
                    </View>
                    <View style={style.details}>
                        <View style={style.tabs}>
                            <Text>Opis</Text><Text>Opinie użytkowników</Text><Text>Cennik</Text>
                        </View>
                        <Description text={"Lorem ipsum"}/>
                    </View>
                </View>
            </View>
        </Background>

    );
}
export default ProductScreen;