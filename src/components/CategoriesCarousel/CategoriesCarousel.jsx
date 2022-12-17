import React from "react";
import style from "./style_CategoriesCarousel";
import {ScrollView, TouchableWithoutFeedback, Text, TouchableOpacity} from "react-native";

function CategoryButton({text, last, onPress}) {
    let textStyle = 
        last ? style.categoriesCarouselText
        : style.categoriesCarouselTextNoMargin;

    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={textStyle}>{text}</Text>
        </TouchableOpacity>
    );
}

function CategoryPlaceholder({last}) {
    let textStyle = 
    last ? style.categoriesCarouselText
    : style.categoriesCarouselTextNoMargin;

    return (
        <Text style={textStyle}>              </Text>
    );
}

const CategoriesCarousel = ({categoryList, navigation}) => {
    if (categoryList.length === 0) {
        return (
            <ScrollView style={style.categoriesCarousel} horizontal={true} showsHorizontalScrollIndicator={false}>
                <CategoryPlaceholder last={false} />
                <CategoryPlaceholder last={false} />
                <CategoryPlaceholder last={false} />
                <CategoryPlaceholder last={true} />
            </ScrollView>
        );
    } else {
        return (
            <ScrollView style={style.categoriesCarousel} horizontal={true} showsHorizontalScrollIndicator={false}>
                {categoryList.map((categoryName, i) => <CategoryButton text={categoryName} key={categoryName} last={(i + 1) === categoryList.length} onPress={() => {
                    navigation.push('HomeCategory', {
                        category: categoryName
                    });
                }} />)}
            </ScrollView>
        ); 
    }
}

export default CategoriesCarousel;