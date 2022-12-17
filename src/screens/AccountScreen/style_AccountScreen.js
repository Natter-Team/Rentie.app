import { StyleSheet, Dimensions, TouchableWithoutFeedback } from "react-native";
import { screenWidth, screenHeight } from "../../../assets/styles";

export const localColors = {
  fbColor: "#1877F2",
  appleColor: "#000",
};

export default StyleSheet.create({
  header: {
    fontSize: 32,
    paddingTop: 24,
    paddingBottom: 24,
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
    marginTop: 15,
  },
  horizontalLane: {
    marginTop: 25,
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
  confirmButton: {
    color: "white",
    width: screenWidth - 76,
    height: 48,
    borderRadius: 6,
    textAlign: "center",
    backgroundColor: "#58ABE7",
    marginTop: 12,
  },
  confirmButtonText: {
    color: "white",
    textAlign: "center",
    marginTop: 16,
    fontSize: 20,
  },
});
