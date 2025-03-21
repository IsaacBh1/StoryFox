import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, Animated, Image } from "react-native";
import { useStory } from "@/contexts/StoryContext";
import { router } from "expo-router";
import { useStoryParameters } from "../../contexts/StoryParametersContext";
import { loadStoryAsync } from "@/api/agent";

const messages = [
  "Crafting an exciting adventure...",
  "Finding the perfect words...",
  "Illustrating the story for you...",
  "Almost there! Just adding final touches...",
];

export default function LoadingScreen() {
  const { storyParametersSettings } = useStoryParameters();
  const progressAnim = useRef(new Animated.Value(0)).current;
  const [currentStep, setCurrentStep] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const { setCurrentStory } = useStory();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const generateStory = async () => {
      if (!storyParametersSettings) {
        console.error("Story parameters are missing!");
        return;
      }

      const storyData = {
        gender: storyParametersSettings.gender || "default",
        readingLevel: storyParametersSettings.readingSkill || "default",
        category: storyParametersSettings.category || "default",
        customPrompt: storyParametersSettings.customPrompt || "",
      };

      setLoading(true);
      setError("");

      try {
        const story = await loadStoryAsync(storyData);
        setCurrentStory(story);
        setLoading(false);
        router.replace("/story/read/summary");
      } catch (error) {
        console.error("Error generating story:", error);
        setError("Failed to generate story. Please try again.");
        setLoading(false);
      }
    };

    generateStory();

    const animation = Animated.timing(progressAnim, {
      toValue: 1,
      duration: 8000,
      useNativeDriver: false,
    });

    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        const nextStep = prev < messages.length - 1 ? prev + 1 : prev;
        Animated.sequence([
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
        ]).start();
        return nextStep;
      });
    }, 2000);

    animation.start();
    return () => {
      animation.stop();
      clearInterval(interval);
    };
  }, [progressAnim, fadeAnim, setCurrentStory, storyParametersSettings]);

  const widthInterpolate = progressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/Stars.png")}
        style={{ width: 48, height: 48 }}
      />
      <Text style={styles.generationText}>Generating your story...</Text>

      {error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <Animated.Text style={[styles.text, { opacity: fadeAnim }]}>
          {messages[currentStep]}
        </Animated.Text>
      )}

      <View style={styles.progressContainer}>
        <Animated.View
          style={[styles.progressBar, { width: widthInterpolate }]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  progressContainer: {
    width: 238,
    height: 11,
    borderRadius: 1000,
    backgroundColor: "#FFF1E7",
    overflow: "hidden",
    marginTop: 20,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#F76808",
    borderRadius: 1000,
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  generationText: {
    fontFamily: "Inter-Bold",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  errorText: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
    marginBottom: 20,
  },
});
