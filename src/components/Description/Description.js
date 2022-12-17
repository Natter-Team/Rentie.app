import React from "react";
import {StyleSheet, Text, View} from "react-native";

const style = StyleSheet.create({
    detailsText: {
        marginTop: 10,
    }
})

const DescriptionComponent = (props) => {
    return (
        <View style={style.detailsText}>
            <Text>{props.text}</Text>
        </View>
    );
}

export default DescriptionComponent;