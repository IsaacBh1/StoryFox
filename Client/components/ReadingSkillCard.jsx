import React, { useReducer } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import InnerIcon from "./InnerIcon";

export default function ReadingSkillCard({
  name = "Listening only",
  description = "Simple words, short sentences,\n more images, narration focus",
  icon = "book-outline",
  stateProp,
  onSelect,
  isSelected = false,
  style,
}) {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default",
  });

  const handlePress = () => dispatch({ type: "TOGGLE" });

  return (
    <TouchableOpacity
      style={[
        styles.option,
        isSelected ? styles.selected : styles.default,
        style,
      ]}
      onPress={onSelect}
      activeOpacity={0.9}
    >
      <View style={styles.iconContainer}>
        <InnerIcon
          size={48}
          color={isSelected ? "#171717" : "#6F6F6F"}
          style={styles.linearEssentional}
          icon={icon}
        />
      </View>
      <View style={styles.textContainer}>
        <Text
          style={[
            styles.textWrapper,
            isSelected ? styles.selectedText : styles.defaultText,
          ]}
        >
          {name}
        </Text>
        <Text
          style={[
            styles.textDescription,
            isSelected ? styles.selectedDescription : styles.defaultDescription,
          ]}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

// Fixed reducer
function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE":
      return {
        state: state.state === "default" ? "selected" : "default",
      };
    default:
      return state;
  }
}

const styles = StyleSheet.create({
  option: {
    width: 312,
    height: 110,
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 16,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#FEFEFE",
    justifyContent: "space-between",
  },
  iconContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "20%",
  },
  linearEssentional: {},
  textContainer: {
    flexDirection: "column",
    alignItems: "base",
    flex: 3,
  },
  textWrapper: {
    fontSize: 18,
    fontWeight: 700,
    fontFamily: "inter",
  },
  textDescription: {
    fontSize: 16,
    color: "#858585",
    lineHeight: 20,
    flexWrap: "wrap",
    flexShrink: 1,
    width: 200,
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
  selectedDescription: {
    color: "#6F6F6F",
  },
  defaultText: {
    color: "#6f6f6f",
  },
  defaultDescription: {
    color: "#858585",
  },
});
