import { StyleSheet } from "react-native";
import { screenWidth } from "../../../assets/styles";

export default StyleSheet.create({
    tipBox: {
        marginLeft: 20,
        marginRight: 20,
        padding: 20,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    tipBoxRight: {
        flex: 1,
        margin: 10,
        marginLeft: 20,
        paddingLeft: 20,
        paddingRight: 10,
        borderLeftColor: "#d9d9d9",
        borderLeftWidth: 1,
        color: "#ffffff",
    },
    tipBoxImage: {
        margin: 10,
        marginLeft: 20,
        marginRight: 0,
    },
    tipBoxLine: {
        height: 2, 
        backgroundColor: '#1877f2', 
        width: 50, 
        marginTop: 5, 
        marginBottom: 10
    },
    tipBoxText: {
        fontSize: 12,
    },
    tipBoxTitle: {
        fontSize: 16,
    }
});