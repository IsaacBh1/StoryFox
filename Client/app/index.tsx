import { Link, router } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";
import { Button } from "tamagui";
import * as NavigationBar from "expo-navigation-bar";

// import "@/global.css";
export default function Index() {
  useEffect(() => {
    NavigationBar.setBehaviorAsync("overlay-swipe"); // Use setBehaviorAsync
    NavigationBar.setVisibilityAsync("hidden");
  });
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button theme={"light_green"}>
        <Link href={"/story/summary"} className="text-red-500">
          Hello World
        </Link>
      </Button>
    </View>
  );
}
