import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import StepHeader from "../../components/StepHeader";
import AppButton from "../../components/AppButton";
import GenderOption from "../../components/GenderOption";
import { useRouter } from "expo-router";
export default function GenderScreen() {
  const router = useRouter();
  const [selectedGender, setSelectedGender] = useState("Boy");
  const screenText = "Who is this story for?";

  const handleSelectGender = (gender) => {
    setSelectedGender(gender);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StepHeader
        currentStep={2}
        totalSteps={3}
        text={screenText}
        OnBack={() => router.navigate('./options')}
      />
      <View style={styles.listWrapper}>
        <View style={styles.GenderOptionWrapper}>
          <GenderOption
            name="Boy"
            stateProp={selectedGender === "Boy" ? "selected" : "default"}
            onPressHundler={() => handleSelectGender("Boy")}
          >
            <Image
              source={require("./../../assets/images/boy.png")}
              style={{ width: 54, height: 54 }}
            />
          </GenderOption>
          <GenderOption
            name="Girl"
            stateProp={selectedGender === "Girl" ? "selected" : "default"}
            onPressHundler={() => handleSelectGender("Girl")}
          >
            <Image
              source={require("./../../assets/images/girl.png")}
              style={{ width: 54, height: 54 }}
            />
          </GenderOption>
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <AppButton onPress={() => router.push("./readingSkills")}>
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
  GenderOptionWrapper: {
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
