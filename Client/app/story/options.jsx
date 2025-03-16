import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import StepHeader from "../../components/StepHeader";
import AppButton from "../../components/AppButton";
import Option from "../../components/Option";
const categories = [
  { id: 1, name: "Chkopi", icon: "paw-outline" },
  { id: 2, name: "Purr", icon: "heart-outline" },
  { id: 3, name: "Meow", icon: "musical-notes-outline" },
  { id: 4, name: "Paw", icon: "paw-outline" },
  { id: 5, name: "Purr", icon: "heart-outline" },
  { id: 6, name: "Meow", icon: "musical-notes-outline" },
  { id: 7, name: "Meow", icon: "musical-notes-outline" },
  { id: 8, name: "Meow", icon: "musical-notes-outline" },
  { id: 9, name: "Meow", icon: "musical-notes-outline" },
];

export default function OptionsScreen() {
  // selectedId holds the currently selected option's id
  const [selectedId, setSelectedId] = useState(null);
  const screenText = "What do you want your story to be about?";

  // When an option is pressed, update selectedId without toggling off.
  const handleSelectOption = (id) => {
    setSelectedId(id);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StepHeader currentStep={1} totalSteps={3} text={screenText} />
      <View style={styles.listWrapper}>
        <FlatList
          data={categories}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.optionWrapper}>
              <Option
                stateProp={selectedId === item.id ? "selected" : "default"}
                name={item.name}
                icon={item.icon}
                onPress={() => handleSelectOption(item.id)}
              />
            </View>
          )}
          contentContainerStyle={styles.listContent}
          columnWrapperStyle={styles.columnWrapper}
          scrollEnabled={true}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <AppButton>
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
  optionWrapper: {
    flex: 1,
    margin: 6,
    alignItems: "center",
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
