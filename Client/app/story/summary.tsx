import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Istory } from "@/types/story";
import { story as MockStory } from "@/constants/test/mockStory";
import StorySummary from "@/components/StorySummmary";
import { setBehaviorAsync, setVisibilityAsync } from "expo-navigation-bar";
import { useStory } from "@/contexts/StoryContext";

const SummaryScreen = () => {
  const story = MockStory;
  const { setCurrentStory, currentStory } = useStory();

  useEffect(() => {
    setCurrentStory((old) => {
      return story;
    });

    setBehaviorAsync("overlay-swipe"); // Use setBehaviorAsync
    setVisibilityAsync("hidden");
  }, [setCurrentStory, setBehaviorAsync, setVisibilityAsync, story]);
  if (currentStory == null) return <Text>Hello</Text>;
  return <StorySummary story={currentStory} />;
};

export default SummaryScreen;

const styles = StyleSheet.create({});
