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

const CategoriesCarousel = ({categoryList}) => {
    return (
        <ScrollView style={style.categoriesCarousel} horizontal={true} showsHorizontalScrollIndicator={false}>
            {categoryList.map((categoryName, i) => <CategoryButton text={categoryName} last={(i + 1) === categoryList.length} />)}
        </ScrollView>
    );
}

export default CategoriesCarousel;