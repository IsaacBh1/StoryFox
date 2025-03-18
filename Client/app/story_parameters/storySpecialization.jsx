import React from "react";
import { SafeAreaView, KeyboardAvoidingView, Platform } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import StepHeader from "../../components/StepHeader";
import AppButton from "../../components/AppButton";
import { useRouter } from "expo-router";
import { YStack, TextArea } from "tamagui";

export default function StorySpecialization() {
  const router = useRouter();
  const screenText = "What do you want your story to be about?";

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <StepHeader
          currentStep={1}
          totalSteps={3}
          text={screenText}
          OnBack={() => router.back()}
        />
        <View style={styles.listWrapper}>
          <YStack overflow="hidden" margin="$3" padding="$2">
            <TextArea
              placeholder="Describe briefly the idea of the story..."
              style={styles.textArea}
            />
          </YStack>
          <View style={styles.buttonWrapper}>
            <AppButton onPress={() => router.push('./gender')}>
              <View style={styles.buttonContent}>
                <Text style={styles.buttonText}>Next</Text>
                <Ionicons
                  name="arrow-forward-outline"
                  size={18}
                  color="#451E11"
                />
              </View>
            </AppButton>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEFEFE",
    padding: 16,
    flexDirection: "column",
  },
  buttonWrapper: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  listWrapper: {
    flex: 8,
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
  textArea: {
    minwidth: 200,
    minHeight: 120,
    overflow: "hidden",
    margin: 12,
    textAlignVertical: "top",
    padding: 8,
  },
});
