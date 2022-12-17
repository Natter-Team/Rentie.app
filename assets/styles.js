import { StyleSheet, Dimensions } from "react-native";

export const defaultBorderRadius = 16;
export const defaultPadding = 16;
export const colors = {
  primaryDark: "#030e0a",
  primaryLight: "#ffffff",
  secondaryDark: "#1b4332",
  secondaryLight: "#2d6a4f",
  accentDark: "#40916c",
  accentLight: "#58ABE7",
  text: "#d8f3dc",
  textDark: "#b7e4c7",
  inactive: "#000",
};
export const screenWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    padding: defaultPadding,
    margin: 0,
    paddingBottom: 0,
    backgroundColor: "#F2F2F3",
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  location: {
    fontSize: 16,
    color: colors.textDark,
    letterSpacing: 1,
    fontFamily: "Poppins_300",
  },
  title: {
    fontSize: 24,
    fontFamily: "Poppins_500",
    letterSpacing: 1,
    color: colors.text,
  },
  title1: {
    fontFamily: "Poppins_400",
    fontSize: 26,
    letterSpacing: 1,
    color: colors.text,
  },
  subtitle: {
    fontSize: 18,
    fontFamily: "Poppins_300",
    letterSpacing: 1,
    color: colors.text,
  },
  locationContainer: {
    width: screenWidth - 64,
    height: 210,
    maxHeight: 250,
    backgroundColor: "#1B4332",
    margin: 32,
    padding: 16,
    borderRadius: 16,
    flexDirection: "column",
    shadowColor: "#000",
    shadowOffset: { height: 10, width: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    // overflow: "scroll",
  },
  header: {
    lineHeight: 36,
    fontSize: 24,
    textAlignVertical: "top",
    color: "#D8F3DC",
  },
  hr: {
    width: "100%",
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#B7E4C7",
    marginTop: 8,
    marginBottom: 8,
  },
  townItem: {
    fontFamily: "Poppins_300",
    marginTop: 8,
    marginLeft: 8,
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 1,
    color: "#93c29a",
  },
  townItemFocused: {
    fontFamily: "Poppins_300",
    color: "#D8F3DC",
  },
});
