import React from "react";
import style from "./style_CategoriesCarousel";
import {ScrollView, TouchableWithoutFeedback, Text} from "react-native";

function CategoryButton({text, last}) {
    let textStyle = 
        last ? style.categoriesCarouselText
        : style.categoriesCarouselTextNoMargin;

    return (
        <TouchableWithoutFeedback>
            <Text style={textStyle}>{text}</Text>
        </TouchableWithoutFeedback>
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

const CategoriesCarousel = ({categoryList}) => {
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
                {categoryList.map((categoryName, i) => <CategoryButton text={categoryName} key={categoryName} last={(i + 1) === categoryList.length} />)}
            </ScrollView>
        ); 
    }
}

export default CategoriesCarousel;