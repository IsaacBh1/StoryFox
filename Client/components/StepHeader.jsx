import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import ProgressBar from "./ProgressBar";
import { Ionicons } from "@expo/vector-icons";
export default function StepHeader({
  currentStep,
  totalSteps,
  text = "hello",
}) {
  return (
    <View style={style.container}>
      <TouchableOpacity
        style={style.fixedButton}
        onPress={() => alert("Button pressed!")}
      >
        <Ionicons name="arrow-back-outline" size={24} color="#1C274C" />
      </TouchableOpacity>
      <Text style={style.stepText}>
        STEP {currentStep} OF {totalSteps}
      </Text>
      <ProgressBar progress={currentStep / totalSteps} />
      <Text style={style.Descriptiontext}>{text}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#FEFEFE",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: 16,
  },
  stepText: {
    color: "#ed5f00",
    fontFamily: "Inter-Regular",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 14,
  },
  Descriptiontext: {
    fontFamily: "Inter-Bold",
    fontSize: 24,
    fontWeight: "00",
    height: 60,
    letterSpacing: 0,
    lineHeight: 30,
    textAlign: "center",
    width: 311,
  },
  fixedButton: {
    position: "absolute",
    top: -10,
    left: 0,
    width: 48,
    height: 48,
    color:"#fff" , 
    borderRadius: 24,

  },
});
