// app/_layout.tsx
import { createTamagui, TamaguiProvider } from "tamagui";
import { defaultConfig } from "@tamagui/config/v4";
import { Stack } from "expo-router";
import { StoryParametersProvider } from "../contexts/StoryParametersContext";
const config = createTamagui(defaultConfig);
import "@/global.css";
import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";
import { StoryProvider } from "@/contexts/StoryContext";
import { useEffect } from "react";

export default function RootLayout() {
  useEffect(() => {
    NavigationBar.setBehaviorAsync("overlay-swipe"); // Use setBehaviorAsync
    NavigationBar.setVisibilityAsync("hidden");
  });
  return (
    <StoryProvider>
      <TamaguiProvider config={config}>
        <StoryParametersProvider>
          <Stack
            initialRouteName="index"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="index" />
            <Stack.Screen name="story_parameters/options" />
          </Stack>
        </StoryParametersProvider>
      </TamaguiProvider>
    </StoryProvider>
  );
}
