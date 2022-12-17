import {Text} from "react-native";
import React from "react";
import {StyleSheet} from "react-native";

const style = StyleSheet.create({
    tag: {
        padding: 3,
        borderRadius: 5,
        backgroundColor: "#fff",
        marginRight: 10,
    },
});

const TagComponent = (props) => {
    return (
        <Text style={style.tag}>{props.text}</Text>
    );
}
export default TagComponent;