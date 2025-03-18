import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";

const ChapterLayout = () => {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right", // Default animation: slide from right
          animationDuration: 400, // Duration in milliseconds
        }}
      />
    </>
  );
};

export default ChapterLayout;

const styles = StyleSheet.create({});
