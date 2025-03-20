// app/index.js
import { View, Text, Image, StyleSheet, Animated, Easing } from "react-native";
import { useRouter } from "expo-router";
import { logoWithText, welcomeLogo } from "@/constants/icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowRight } from "@tamagui/lucide-icons";
import AppButton from "@/components/AppButton";
import { useEffect, useRef } from "react";

export default function WelcomeScreen() {
  const router = useRouter();
  const bounceAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        // Move up
        Animated.timing(bounceAnim, {
          toValue: -15, // Negative value moves up
          duration: 1500,
          easing: Easing.out(Easing.cubic), // Smooth deceleration
          useNativeDriver: true,
        }),
        // Move down
        Animated.timing(bounceAnim, {
          toValue: 0,
          duration: 1500,
          easing: Easing.in(Easing.cubic), // Smooth acceleration
          useNativeDriver: true,
        }),
      ]),
      { iterations: -1 } // Infinite loop
    ).start();

    // Cleanup animation on unmount
    return () => {
      bounceAnim.stopAnimation();
    };
  }, []);
  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: "#FCFCFC" }}>
      <View style={styles.container}>
        <View>
          <Image
            source={logoWithText} // Replace with your fox image asset
            style={styles.header}
            resizeMode="contain"
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>
            Let's Create Magical Stories Together!
          </Text>
          <Text style={styles.subtitle}>
            Create fun and educational stories{"\n"} with a tap!
          </Text>
        </View>
        <View>
          <AppButton
            onPress={() => {
              router.push("/story");
            }}
            style={styles.button}
          >
            <Text
              style={{
                color: "#451E11",
                marginRight: 10,
                fontFamily: "Inter",
                fontWeight: 700,
                fontSize: 14,
              }}
            >
              Get Started
            </Text>
            <ArrowRight />
          </AppButton>
        </View>
        <Animated.View
          style={{
            transform: [{ translateY: bounceAnim }],
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={welcomeLogo}
            style={styles.foxImage}
            resizeMode="contain"
          />
        </Animated.View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    width: 145,
    height: 40,
  },
  container: {
    height: "100%",
    margin: 10,
    backgroundColor: "#FCFCFC",
    alignItems: "center",
    paddingTop: 30,
  },

  logo: {
    width: 30,
    height: 30,
  },
  appName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF6200",
  },
  content: {
    // flex: 1,
    alignItems: "center",
    marginTop: 70,
    justifyContent: "center",
  },
  foxImage: {
    width: 250,
    //marginBottom: 20,
  },
  title: {
    fontFamily: "Inter-Bold",
    lineHeight: 45,
    fontSize: 28,
    color: "#171717",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginTop: 20,
    color: "#666",
    textAlign: "center",
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  button: {
    flexDirection: "row",
    marginTop: -10,
    width: 156,
    alignItems: "center",

    //marginBottom: 30,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
  arrowIcon: {
    width: 20,
    height: 20,
    tintColor: "#FFF",
  },
});
