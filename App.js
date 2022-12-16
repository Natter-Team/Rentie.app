import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import useLoadAppData from "./src/useLoadAppData";

export default function App() {
  const [isFirstLaunch, loadApplicationAssets] = useLoadAppData();

  useEffect(() => {}, []);

  return (
    <SafeAreaView>
      <Text>{isFirstLaunch ? "first" : "not first"}</Text>
    </SafeAreaView>
  );
}
