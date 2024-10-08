import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
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
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
