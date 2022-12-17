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
        alignItems: "center",
        width: screenWidth,
        height: screenHeight,
    },
    tipBox: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: screenWidth - 50,
        height: 150,
        backgroundColor: "#fff",
    },
    tipBoxRight: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "flex-start",
    },
    tipBoxLeft: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        borderRightColor: "#d9d9d9",
        borderRightWidth: 1,
        height: 110,
        alignItems: "center",
        padding: 10,
    },
    tipBoxText: {
        fontSize: 16,
    },
    tipBoxTitle: {
        fontSize: 24,
    }
});
