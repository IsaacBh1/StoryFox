import { createTamagui, TamaguiProvider, View } from "tamagui";
import { defaultConfig } from "@tamagui/config/v4"; // for quick config install this
import { router, Stack } from "expo-router";
import { useEffect } from "react";
import * as NavigationBar from "expo-navigation-bar";
const config = createTamagui(defaultConfig);
import "@/global.css";
import { StatusBar } from "expo-status-bar";
import { StoryProvider } from "@/contexts/StoryContext";

const RootLayout = () => {
  useEffect(() => {
    router.push("/story/summary");
    NavigationBar.setBehaviorAsync("overlay-swipe"); // Use setBehaviorAsync
    NavigationBar.setVisibilityAsync("hidden");
  }, []);

  return (
    <StoryProvider>
      <TamaguiProvider config={config}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="story" />
        </Stack>
        <StatusBar hidden />
      </TamaguiProvider>
    </StoryProvider>
  );
};

export default RootLayout;
