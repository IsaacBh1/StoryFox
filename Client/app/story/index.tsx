// app/index.js
import { View, Text, Image, StyleSheet, Animated, Easing } from "react-native";
import { router, useRouter } from "expo-router";
import { logoWithText, sadFox, welcomeLogo } from "@/constants/icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowRight, SlidersVertical, Sparkles } from "@tamagui/lucide-icons";
import AppButton from "@/components/AppButton";
import { useEffect, useRef } from "react";
import { Button } from "tamagui";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ height: "100%" }}>
      <View style={styles.container}>
        <ListHeader />
        <NoStoriesFoundScreen />
      </View>
    </SafeAreaView>
  );
}

const NoStoriesFoundScreen = () => (
  <View style={{ alignItems: "center", marginBottom: 70 }}>
    <Image source={sadFox} style={styles.foxImage} resizeMode="contain" />
    <View style={styles.content}>
      <Text style={styles.title}>No Stories Yet!</Text>
      <Text style={styles.subtitle}>
        Start a magical journey by creating {"\n"} your first story!
      </Text>
    </View>

    <AppButton
      onPress={() => {
        router.replace("/story_parameters/options");
      }}
      style={styles.button}
    >
      <Text style={{ color: "#451E11", marginRight: 10 }}> New Story</Text>
      <Sparkles size={"$1"} />
    </AppButton>
  </View>
);

const ListHeader = () => {
  return (
    <View style={styles.header}>
      <Image
        source={logoWithText}
        style={{ width: 145, height: 40 }}
        resizeMode="contain"
      />
      <Button
        style={{ backgroundColor: "transparent" }}
        icon={<SlidersVertical size={"$1.5"} />}
        onPress={() => {
          router.push("/settings");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  container: {
    height: "100%",
    padding: 10,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    paddingTop: 30,
    justifyContent: "space-between",
  },

  content: {
    // flex: 1,
    alignItems: "center",

    justifyContent: "center",
  },
  foxImage: {
    width: 200,
    marginBottom: 18,
  },
  title: {
    fontWeight: 700,
    fontSize: 24,
    color: "#171717",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,

    color: "#666",
    textAlign: "center",
    paddingHorizontal: 20,
  },
  button: {
    flexDirection: "row",
    marginTop: 50,
    width: 250,
    borderRadius: 25,
    alignItems: "center",

    marginBottom: 30,
  },
});
