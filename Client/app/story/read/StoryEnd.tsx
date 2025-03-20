import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GenericStoryScreen from "@/components/GenericStoryScreen";
import { useStory } from "@/contexts/StoryContext";
import NotFoundScreen from "./+not-found";
import { Book, Play, Star, TestTube } from "@tamagui/lucide-icons";
import MainCustomButton from "@/components/MainCustomButton";
import { router } from "expo-router";

const StoryEnd = () => {
  const { currentStory } = useStory();
  if (currentStory == null) return <NotFoundScreen />;

  return (
    <GenericStoryScreen
      title={currentStory?.title}
      image={currentStory.teaserImage}
    >
      <View style={{ height: "100%", gap: 30 }}>
        <View>
          <Text style={{ fontSize: 16, fontWeight: "700", color: "#171717" }}>
            The end
          </Text>
          <Text
            style={{ color: "#858585", fontWeight: "400", fontStyle: "italic" }}
          >
            {" "}
            {`\`${currentStory.storyValue}\``}{" "}
          </Text>
        </View>
        <View style={{ gap: 8, flex: 1 }}>
          <MainCustomButton
            backgroundColor="#FA934E"
            icon={<Book />}
            title="Go To Library"
            onPress={() => {
              router.navigate("/story/read/RateStory");
            }}
          />
          <MainCustomButton
            backgroundColor="#fff"
            icon={<Play />}
            title="Read Again"
            onPress={() => {
              router.replace("/story/read/summary");
            }}
            borderColor="#FA934E"
          />
          <MainCustomButton
            backgroundColor="#fff"
            icon={<Star />}
            title="Generate a new Story"
            borderColor="#FA934E"
            onPress={() => {
              router.replace("/");
            }}
          />
        </View>
      </View>
    </GenericStoryScreen>
  );
};

export default StoryEnd;

const styles = StyleSheet.create({
  buttonContainer: {},
});
