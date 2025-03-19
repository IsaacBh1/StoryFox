import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";

export default function AppButton({ children, onPress, style }) {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.contentContainer}>{children}</View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    zIndex:10 ,
    width: 276,
    height: 44,
    borderRadius: 999,
    backgroundColor: "#FA934E",
    marginVertical: 12,
    alignContent: "center",
    justifyContent: "center",
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    color: "#451e11",
    alignContent: "center",
    justifyContent: "center",
  },
});
