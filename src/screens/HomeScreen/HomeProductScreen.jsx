import React, { useEffect, useState } from "react";
import {Image, Text, TouchableHighlight, TouchableOpacity, View} from "react-native";
import style from "./style_ProductScreen";
import Background from "../../components/Background/Background";
import Tag from "../../components/Tag/Tag";
import Description from "../../components/Description/Description";
import settings from "../../settings.json";

const HomeProductScreen = ({navigation, route}) => {
    const {productId} = route.params;

    const [product, setProduct] = useState(null);
    useEffect(() => {
        fetch(settings.baseURL + `/api/products/${productId}`)
            .then(result => result.json())
            .then(data => {
                setProduct(data);
            });
    }, []);

    if (product == null) {
        return (
        <Background>
            <View style={style.container}>
                <Text>Ładowanie...</Text>
            </View>
        </Background>
        );
    }

    console.log(product);

    return (
        <Background>
            <View style={style.container}>
                <Image source={{uri: settings.baseURL + `/api/products/${productId}/image`}} style={style.image}/>
                <View style={style.header}>
                    <Text style={style.title}>{product.name}</Text>
                    <View style={style.tags}>
                        {product.tags.map(tagName => (<Tag key={tagName} text={tagName}/>))}
                    </View>
                    <View style={style.priceContainer}>
                        <Text style={style.price}>Cena: {product.price} zł / 24h</Text>
                        <TouchableOpacity>
                            <Text style={style.borrow}>Wypożycz</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={style.details}>
                        <Text style={style.textHeader}>Opis</Text>
                        <Description text={product.description}/>
                    </View>
                </View>
            </View>
        </Background>
    );
}
export default HomeProductScreen;