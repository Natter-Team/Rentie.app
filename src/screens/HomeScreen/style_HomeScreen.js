import { StyleSheet, Dimensions, TouchableWithoutFeedback } from "react-native";
import { screenWidth, screenHeight } from "../../../assets/styles";

export const localColors = {
    fbColor: "#1877F2", 
    appleColor: "#000",
};

export default StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        //alignItems: "center",
        width: screenWidth,
        height: screenHeight,
    },
    header: {
        alignSelf: "flex-start",
        margin: 20,
        fontSize: 16,
        fontWeight: 'bold',
    },
    mainScroll: {
        paddingTop: 5,
        paddingBottom: 20,
    }
});
