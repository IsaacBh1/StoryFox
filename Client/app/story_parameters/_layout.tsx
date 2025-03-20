import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const ParametersLayout = () => {
  return (
    <Stack initialRouteName="options" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="story_parameters/options" />
      <Stack.Screen name="story_parameters/gender" />
      <Stack.Screen name="story_parameters/readingSkills" />
      <Stack.Screen name="story_parameters/loadingStory" />
      <Stack.Screen name="story_parameters/storySpecialization" />
    </Stack>
  );
};

export default ParametersLayout;

const styles = StyleSheet.create({});
