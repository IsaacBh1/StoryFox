import { createTamagui, TamaguiProvider, View } from "tamagui";
import { defaultConfig } from "@tamagui/config/v4"; // for quick config install this
import { router, Stack } from "expo-router";
import { useEffect } from "react";
import "../global.css";
const config = createTamagui(defaultConfig);

const RootLayout = () => {
  // useEffect(() => {
  //   router.push("/story/summary");
  // });
  return (
    <TamaguiProvider config={config}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="story/summary" />
      </Stack>
    </TamaguiProvider>
  );
};

export default RootLayout;
