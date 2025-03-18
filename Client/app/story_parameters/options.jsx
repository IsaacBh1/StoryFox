// CategroyOptionsScreen.js
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import StepHeader from "../../components/StepHeader";
import AppButton from "../../components/AppButton";
import CategroyOption from "../../components/CategroyOption";
import InnerIcon from "../../components/InnerIcon";
import { useRouter } from "expo-router";

const categories = [
  { id: 1, name: "Nature", icon: "sunny-outline" },
  { id: 2, name: "Science", icon: "planet-outline" },
  { id: 3, name: "Fantasy", icon: "diamond-outline" },
  { id: 4, name: "Adventure", icon: "map-outline" },
  { id: 5, name: "Sport", icon: "bicycle-outline" },
  { id: 6, name: "Culture", icon: "leaf-outline" },
  { id: 7, name: "Family", icon: "home-outline" },
  { id: 8, name: "Custom", icon: "add-circle-outline" },
];

export default function CategroyOptionsScreen() {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState(null);
  const screenText = "What do you want your story to be about?";

  // When an option is pressed, update the selectedId (only one can be selected)
  const handleSelectCategroyOption = (id, name) => {
    if (name === "Custom") {
      router.navigate("./storySpecialization");
    } else {
      setSelectedId(id);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StepHeader
        currentStep={1}
        totalSteps={3}
        text={screenText}
        OnBack={() => {
          router.navigate("/");
        }}
      />
      <View style={styles.listWrapper}>
        <FlatList
          data={categories}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.CategroyOptionWrapper}>
              <CategroyOption
                stateProp={selectedId === item.id ? "selected" : "default"}
                name={item.name}
                icon={item.icon}
                onPress={() => handleSelectCategroyOption(item.id, item.name)}
              >
                <InnerIcon
                  size={48}
                  color={selectedId === item.id ? "#171717" : "#6F6F6F"}
                  icon={item.icon}
                />
              </CategroyOption>
            </View>
          )}
          contentContainerStyle={styles.listContent}
          columnWrapperStyle={styles.columnWrapper}
          scrollEnabled={true}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <AppButton onPress={() => router.push("./gender")}>
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
    justifyContent: "flex-start",
  },
  buttonWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  listWrapper: {
    flex: 8,
  },
  CategroyOptionWrapper: {
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
