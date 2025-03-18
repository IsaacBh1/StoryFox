// app/index.tsx
import { Link } from "expo-router";
import { View } from "react-native";
import { Button } from "tamagui";
import * as NavigationBar from "expo-navigation-bar";
import { useEffect } from "react";

// import "@/global.css";
export default function Index() {
  useEffect(() => {
    NavigationBar.setBehaviorAsync("overlay-swipe"); // Use setBehaviorAsync
    NavigationBar.setVisibilityAsync("hidden");
  });
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Link href="./story_parameters/options" asChild>
        <Button theme="light_green">select gender</Button>
      </Link>
    </View>
  );
}
