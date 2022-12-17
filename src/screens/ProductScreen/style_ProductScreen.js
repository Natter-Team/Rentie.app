import { StyleSheet, Dimensions, TouchableWithoutFeedback } from "react-native";
import { screenWidth, screenHeight } from "../../../assets/styles";

export default StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        width: screenWidth,
    },
    image: {
        width: screenWidth,
        height: 300,
        resizeMode: "cover",
    },
    header: {
        width: screenWidth,
        padding: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    tags: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        flexWrap: "wrap",
    },
    details: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: screenWidth - 40,
        marginTop: 20,
        backgroundColor: "#fff",
        padding: 15,
    },
    tabs: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: screenWidth - 70,
        borderBottomColor: "#3d4043",
        borderBottomWidth: 1,
        paddingBottom: 3,
    },
    title: {
        fontSize: 24,
        marginLeft: 10,
    },
});