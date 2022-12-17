import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import useLoadAppData from "./src/useLoadAppData";
import Navigator from "./src/Navigator";
export default function App() {
  const [isFirstLaunch, loadApplicationAssets] = useLoadAppData();

  useEffect(() => {}, []);

  return <Navigator />;
}
