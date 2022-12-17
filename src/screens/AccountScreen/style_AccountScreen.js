import { StyleSheet, Dimensions, TouchableWithoutFeedback } from "react-native";
import { screenWidth, screenHeight } from "../../../assets/styles";

export const localColors = {
  fbColor: "#1877F2",
  appleColor: "#000",
};

export default StyleSheet.create({
  topBox: {
    height: 80,
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
    marginBottom: 25,
  },
  horizontalLane: {
    marginTop: 15,
    width: screenWidth - 48,
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#000",
  },
  contentContainer: {
    display: "flex",
    height: screenHeight - 120 - 40,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  horizontalLaneContainer: {
    // position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  HrText: {
    top: -10,
    backgroundColor: "#F2F2F3",
    paddingHorizontal: 10,
  },
  textInput: {
    width: screenWidth - 76,
    height: 52,
    borderRadius: 6,
    backgroundColor: "#fff",
    paddingLeft: 46,
  },
  keyboardView: {
    // height: 250,
    width: screenWidth - 76,
  },
  confirmButton: {
    color: "white",
    width: screenWidth - 76,
    height: 32,
    borderRadius: 12,
    textAlign: "center",
    backgroundColor: "#58ABE7",
    marginTop: 16,
    textAlignVertical: "middle",
    fontSize: 20,
  },
});
