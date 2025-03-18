// app/_layout.tsx
import { createTamagui, TamaguiProvider } from "tamagui";
import { defaultConfig } from "@tamagui/config/v4";
import { Stack } from "expo-router";

const config = createTamagui(defaultConfig);
import "@/global.css";
import { StatusBar } from "expo-status-bar";
import { StoryProvider } from "@/contexts/StoryContext";

export default function RootLayout() {
  return (
    <TamaguiProvider config={config}>
      <Stack initialRouteName="index">
        <Stack.Screen name="index" />
        <Stack.Screen
          name="story_parameters/options"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="story_parameters/gender"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="story/summary" options={{ headerShown: false }} />
        <Stack.Screen
          name="story_parameters/readingSkills"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="story_parameters/loadingStory"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="story_parameters/storySpecialization"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="story/chapters/[id]"
          options={{ headerShown: false }}
        />
      </Stack>
    </TamaguiProvider>
  );
}
