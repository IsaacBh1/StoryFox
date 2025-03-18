// CategroyOption.js
import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

export default function CategroyOption({
  name = " ",
  stateProp,
  style,
  onPress,
  children,
}) {
  const handleSelectCategroyOption = (id, name) => {
    if (name === "Custom") {
      router.navigate("./storySpecialization");
    } else {
      setSelectedId(id);
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.option,
        stateProp === "selected" ? styles.selected : styles.default,
        style,
      ]}
      onPress={onPress}
      activeOpacity={0.9}
    >
      <View style={styles.iconContainer}>{children}</View>
      <Text
        style={[
          styles.textWrapper,
          stateProp === "selected" ? styles.selectedText : styles.defaultText,
        ]}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  option: {
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 16,
    justifyContent: "center",
    padding: 24,
    width: 139,
    backgroundColor: "#FEFEFE",
  },
  iconContainer: {
    marginBottom: 12,
  },
  textWrapper: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    includeFontPadding: false,
  },
  selected: {
    borderColor: "#f76808",
  },
  default: {
    borderColor: "#e8e8e8",
  },
  selectedText: {
    color: "#171717",
  },
  defaultText: {
    color: "#6f6f6f",
  },
});
