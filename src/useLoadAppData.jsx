import { useEffect, useState } from "react";
import * as Font from "expo-font";
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useLoadAppData() {
  const [isAppReady, setIsAppReady] = useState(false);
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);

  const checkFirstLaunch = async () => {
    const storageFirstLaunch = await AsyncStorage.getItem(
      "wasAppLaunched"
    ).then((value) => {
      if (value === null || value === undefined) {
        setIsFirstLaunch(true);
        // AsyncStorage.setItem("wasAppLaunched", "true");
        console.log("First launch");
      } else {
        setIsFirstLaunch(false);
        console.log("Not first launch");
      }
    });
  };

  const loadApplicationAssets = async () => {
    try {
      await Font.loadAsync({
        // TODO: Fonty od kacpra
      });
      await Font.loadAsync(Ionicons.font);
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (e) {
      console.error(e);
    } finally {
      setIsAppReady(true);
    }
  };

  useEffect(() => {
    checkFirstLaunch();
  }, []);

  return [isFirstLaunch, loadApplicationAssets];
}
