import { ArrowLeft, HeartOff } from "@tamagui/lucide-icons";
import { router } from "expo-router";
import { StyleSheet, Text } from "react-native";
import { Button, View } from "tamagui";

export default function StoryHeader({ title }: { title?: string }) {
  return (
    <View
      style={{
        flexDirection: "row",
        padding: 20,
        justifyContent: "space-between",
        alignItems: "center",
        gap: 5,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: `${title ? "rgba(30, 30, 30, 0.5)" : ""}`,
        paddingTop: 20,
        height: 70,
      }}
    >
      <Button
        circular
        size={"$5"}
        icon={<ArrowLeft size={"$1.5"} />}
        style={styles.button}
        color={"$color1"}
        onPress={() => {
          router.back();
        }}
      />
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
        {" "}
        {title}{" "}
      </Text>
      <Button
        size={"$5"}
        circular
        icon={<HeartOff size={"$1.5"} />}
        style={styles.button}
        color={"$color1"}
        background={"black"}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    color: "#C7C7C7",
    fontSize: 16,
    fontWeight: 700,
    flex: 1,
    textAlign: "center",
  },
  button: {
    backgroundColor: "rgba(0, 0, 0, 0.45)",
    opacity: 0.7, // Overall translucency;
  },
});
