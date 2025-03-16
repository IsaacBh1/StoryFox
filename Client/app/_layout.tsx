// app/_layout.tsx
import { createTamagui, TamaguiProvider } from "tamagui";
import { defaultConfig } from "@tamagui/config/v4";
import { Stack } from "expo-router";

const config = createTamagui(defaultConfig);

export default function RootLayout() {
  return (
    <TamaguiProvider config={config}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="story/options" />
        <Stack.Screen name="story/summary" />
        <Stack.Screen name="story/chapters/[id]" />
      </Stack>
    </TamaguiProvider>
  );
}