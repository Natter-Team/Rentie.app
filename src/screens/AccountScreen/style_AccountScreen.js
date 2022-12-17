import { StyleSheet, Dimensions } from "react-native";
import { screenWidth, screenHeight } from "../../../assets/styles";

export const localColors = {
  fbColor: "#1877F2",
  appleColor: "#000",
};

export default StyleSheet.create({
  topBox: {
    height: 120,
    backgroundColor: "#fff",
    width: screenWidth,
    fontSize: 28,
  },
  header: {
    fontSize: 32,
    paddingTop: 32,
    paddingBottom: 32,
    textAlign: "center",
  },
  customLoginBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 6,
    padding: 10,
    width: screenWidth - 48,
  },
  horizontalLane: {
    width: screenWidth,
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#fff",
  },
  contentContainer: {
    display: "flex",
    height: screenHeight - 120,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
