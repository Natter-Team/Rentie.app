import { SafeAreaView } from "react-native";
import defaultStyles, { colors } from "../../../assets/styles";
import { LinearGradient } from "expo-linear-gradient";

export default function Background({ children, wrapperStyle }) {
  return (
    <>
      <SafeAreaView style={[wrapperStyle, defaultStyles.wrapper]}>
        {children}
      </SafeAreaView>
    </>
  );
}
