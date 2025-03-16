import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { story as MockStory } from "@/constants/test/mockStory";
import StorySummary from "@/components/StorySummmary";

const SummaryScreen = () => {
  const story = MockStory;

  return <StorySummary story={story} />;
};

export default SummaryScreen;

const styles = StyleSheet.create({});
