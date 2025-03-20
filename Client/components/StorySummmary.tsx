import { GestureResponderEvent, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Istory } from "@/types/story";
import "@/global.css";
import { Button } from "tamagui";

import { Play, RefreshCcw } from "@tamagui/lucide-icons";
import MainCustomButton from "./MainCustomButton";
import { router } from "expo-router";
import GenericStoryScreen from "./GenericStoryScreen";
interface Props {
  story: Istory;
}
const StorySummary = ({ story }: Props) => {
  function handlePress(event: GestureResponderEvent): void {
    router.push("/story/chapters/0");
  }

  return (
    <GenericStoryScreen image={story.teaserImage} title={story.title}>
      <View>
        <View>
          <Text style={styles.header}>{story.title} </Text>
          <Text style={{ color: "#858585" }}>Chosen Topic</Text>
        </View>
        <View style={styles.stats}>
          <SmallInfo title="Chapters" value={story.chapters.length} />
          <SmallInfo title="Words" value={story.wordCount} />
          <SmallInfo title="Reading Time" value={story.readingTime} />
        </View>
      </View>
      <View style={styles.buttonGroup}>
        <Button
          circular
          color={"$color11"}
          style={{ backgroundColor: "transparent" }}
          borderColor={"$color11"}
          icon={<RefreshCcw />}
          size={"$5"}
        />
        <MainCustomButton
          onPress={handlePress}
          icon={<Play borderColor={"$color02"} />}
          title={"Start Reading"}
          backgroundColor="#FA934E"
        />
      </View>
    </GenericStoryScreen>
  );
};

const SmallInfo = ({
  title,
  value,
}: {
  value: string | number;
  title: string;
}) => {
  return (
    <View style={{ gap: 5 }}>
      <Text style={{ color: "#6F6F6F", fontSize: 18, fontWeight: 700 }}>
        {" "}
        {value}{" "}
      </Text>
      <Text style={{ color: "#858585", fontSize: 16 }}> {title} </Text>
    </View>
  );
};
export default StorySummary;

const styles = StyleSheet.create({
  infos: {
    height: "40%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingVertical: 30,
    paddingHorizontal: 30,
    justifyContent: "space-between",
  },
  header: {
    color: "#171717",
    fontSize: 24,
    fontWeight: 700,
    textAlign: "left",
  },
  stats: {
    flexDirection: "row",
    gap: 32,
    marginTop: 15,
  },
  buttonGroup: {
    flexDirection: "row",

    gap: 12,
  },
  startButton: {
    flex: 1,
    backgroundColor: "#FA934E",
  },
});
