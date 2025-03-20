import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const StoryListLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default StoryListLayout;

const styles = StyleSheet.create({});
