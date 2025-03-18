import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import StepHeader from "../../components/StepHeader";
import AppButton from "../../components/AppButton";
import ReadingSkillCard from "../../components/ReadingSkillCard";
import { useRouter } from "expo-router";

export default function ReadingSkillsSecreen() {
  const router = useRouter();
  const [selectedSkill, setSelectedSkill] = useState(null);
  const screenText = "What is your child’s reading level?";

  return (
    <SafeAreaView style={styles.container}>
      <StepHeader
        currentStep={3}
        totalSteps={3}
        text={screenText}
        OnBack={() => router.navigate("./gender")}
      />
      <Text
        style={{
          fontSize: 14,
          color: "#858585",
          marginVertical: 8,
          fontWeight: 400,
          horisonalAlign: "center",
          textAlign: "center",
          width: 250,
        }}
      >
        This helps us adjust the language and sentence complexity
      </Text>
      <View style={styles.listWrapper}>
        <View style={styles.SkillOptionWrapper}>
          <ReadingSkillCard
            name="Listening only"
            description="Simple words, more images, narration focus"
            icon="headset-outline"
            isSelected={selectedSkill === "Listening only"}
            onSelect={() => setSelectedSkill("Listening only")}
          />
          <ReadingSkillCard
            name="Early Reader"
            description="Short sentences, common sight words"
            icon="book-outline"
            isSelected={selectedSkill === "Early Reader"}
            onSelect={() => setSelectedSkill("Early Reader")}
          />
          <ReadingSkillCard
            name="Confident Reader"
            description="Longer sentences, richer vocabulary"
            icon="library-outline"
            isSelected={selectedSkill === "Confident Reader"}
            onSelect={() => setSelectedSkill("Confident Reader")}
          />
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <AppButton onPress={() => router.push("./loadingStory")}>
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>Next</Text>
            <Ionicons name="arrow-forward-outline" size={18} color="#451E11" />
          </View>
        </AppButton>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEFEFE",
    padding: 16,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  columnWrapper: {
    marginHorizontal: 0,
    paddingHorizontal: 0,
    justifyContent: "flex-start",
  },
  buttonWrapper: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  listWrapper: {
    flex: 8,
  },
  SkillOptionWrapper: {
    flex: 1,
    margin: 6,
    alignItems: "center",
    gap: 12,
  },
  buttonContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },

  buttonText: {
    color: "#451E11",
    fontSize: 16,
  },
});
