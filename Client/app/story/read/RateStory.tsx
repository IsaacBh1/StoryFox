import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GenericStoryScreen from "@/components/GenericStoryScreen";
import { useStory } from "@/contexts/StoryContext";
import NotFoundScreen from "./+not-found";
import { Check, Star, X } from "@tamagui/lucide-icons";
import MainCustomButton from "@/components/MainCustomButton";
import { router } from "expo-router";
const RateStory = () => {
  const { currentStory } = useStory();
  if (currentStory == null) return <NotFoundScreen />;
  return (
    <GenericStoryScreen
      title={currentStory?.title}
      image={currentStory.teaserImage}
    >
      <View style={{ height: "100%", gap: 25 }}>
        <View>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "700",
              color: "#171717",
              textAlign: "center",
              marginBottom: 10,
            }}
          >
            Did you enjoy{"\n"}the story?
          </Text>
          <Text
            style={{
              textAlign: "center",
              color: "#858585",
              fontWeight: "400",
              fontStyle: "italic",
            }}
          >
            Your feedback helps us create even better stories for you!
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingLeft: 55,
              paddingRight: 55,
              marginTop: 10,
            }}
          >
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </View>
        </View>
        <View style={{ gap: 8, flex: 1 }}>
          <MainCustomButton
            backgroundColor="#FA934E"
            icon={<Check />}
            title="Submit"
            onPress={() => {
              router.replace("/");
            }}
          />

          <MainCustomButton
            backgroundColor="#fff"
            icon={<X />}
            title="Not Now"
            onPress={() => {
              router.replace("/");
            }}
          />
        </View>
      </View>
    </GenericStoryScreen>
  );
};

export default RateStory;

const styles = StyleSheet.create({});
