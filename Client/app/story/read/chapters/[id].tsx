import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Istory } from "@/types/story";
import { Button } from "tamagui";
import {
  ArrowLeft,
  ArrowRight,
  MoreHorizontal,
  Play,
  Sun,
} from "@tamagui/lucide-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useStory } from "@/contexts/StoryContext";
import NotFoundScreen from "@/app/story/chapters/+not-found";
import GenericStoryScreen from "@/components/GenericStoryScreen";

const Chapter = () => {
  const { currentStory } = useStory();
  const { id } = useLocalSearchParams();
  if (
    typeof id != "string" ||
    !currentStory ||
    Number.parseInt(id) > currentStory.chapters.length
  )
    return <NotFoundScreen />;
  const index = Number.parseInt(id);
  const handleNext = (id: number) => {
    id > -1
      ? router.push(`/story/chapters/${id}`)
      : router.push(`/story/StoryEnd`);
  };
  const handlePrevious = () => {
    router.back();
  };
  return (
    <GenericStoryScreen
      image={currentStory.chapters[index].image}
      title={currentStory.title}
      showTitleInTopBar={true}
      isChapter
    >
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ gap: 15 }}>
          <Text style={{ color: "#171717", fontSize: 16, fontWeight: "700" }}>
            {" "}
            Chapter {index + 1}{" "}
          </Text>
          <Text style={{ color: "#858585", lineHeight: 26 }}>
            {currentStory.chapters[index].text}{" "}
          </Text>
        </View>
      </ScrollView>
      <View style={styles.buttonGroup}>
        <Button
          circular
          color={"$color11"}
          style={{ backgroundColor: "transparent" }}
          icon={<Sun size={"$1.5"} />}
          size={"$5"}
        />
        <View style={{ flexDirection: "row", gap: "12" }}>
          <Button
            circular
            color={"$color11"}
            style={{ backgroundColor: "transparent" }}
            borderColor={"$color11"}
            icon={<ArrowLeft size={"$1.5"} />}
            size={"$5"}
            onPress={() => {
              handlePrevious();
            }}
          />
          <Button
            circular
            color={"#1C274C"}
            style={{ backgroundColor: "#FA934E" }}
            borderColor={"$color11"}
            icon={<Play size={"$1.5"} />}
            size={"$5"}
          />
          <Button
            circular
            color={"$color11"}
            style={{ backgroundColor: "transparent" }}
            borderColor={"$color11"}
            icon={<ArrowRight size={"$1.5"} />}
            size={"$5"}
            onPress={() => {
              handleNext(
                index < currentStory.chapters.length - 1 ? index + 1 : -1
              );
            }}
          />
        </View>
        <Button
          circular
          color={"$color11"}
          style={{ backgroundColor: "transparent" }}
          icon={<MoreHorizontal size={"$1.5"} />}
          size={"$5"}
        />
      </View>
    </GenericStoryScreen>
  );
};

export default Chapter;

const styles = StyleSheet.create({
  buttonGroup: {
    flexDirection: "row",
    gap: 12,
    justifyContent: "space-around",
    marginTop: 20,
  },
  chapter: {
    height: "100%",
  },
});
