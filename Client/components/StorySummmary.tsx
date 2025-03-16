import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Istory } from "@/types/story";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {
  story: Istory;
}
const StorySummary = ({ story }: Props) => {
  return (
    <SafeAreaView>
      <ImageBackground
        source={story.teaserImage}
        resizeMode="contain"
        className="h-full flex-1   w-full justify-start"
      >
        <View className="h-full w-full min-h-6 ">
          <Text> Hello</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default StorySummary;

const styles = StyleSheet.create({});
