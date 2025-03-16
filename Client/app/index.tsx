import { Link, router } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";
import { Button } from "tamagui";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button theme={"light_green"}>
        <Link href={"/story/summary"}>Hello World</Link>
      </Button>
    </View>
  );
}
