import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    AfBold: require("../assets/fonts/AfacadFlux-Bold.ttf"),
    AfMedium: require("../assets/fonts/AfacadFlux-Medium.ttf"),
    AfRegular: require("../assets/fonts/AfacadFlux-Regular.ttf"),
    AfSemiBold: require("../assets/fonts/AfacadFlux-SemiBold.ttf"),
    AfThin: require("../assets/fonts/AfacadFlux-Thin.ttf"),
    AfExtraBold: require("../assets/fonts/AfacadFlux-ExtraBold.ttf"),
    AfExtraLight: require("../assets/fonts/AfacadFlux-ExtraLight.ttf"),
    AfLight: require("../assets/fonts/AfacadFlux-Light.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
