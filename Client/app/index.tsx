// app/index.tsx
import { Link } from "expo-router";
import { View } from "react-native";
import { Button } from "tamagui";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Link href="./story_parameters/options" asChild>
        <Button theme="light_green">select gender</Button>
      </Link>
    </View>
  );
}