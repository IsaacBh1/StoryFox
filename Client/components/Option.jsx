// Option.js
import React, { useReducer } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import InnerIcon from "./InnerIcon";

export default function Option ({ name = " " , icon  , stateProp, style }) {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default",
  });

  const handlePress = () => dispatch({ type: "TOGGLE" }); // Added action type

  return (
    <TouchableOpacity
      style={[
        styles.option,
        state.state === "selected" ? styles.selected : styles.default,
        style,
      ]}
      onPress={handlePress}
      activeOpacity={0.9}
    >
      <View style={styles.iconContainer}>
        <InnerIcon
          size={48}
          color={state.state === "selected" ? "#171717" : "#6F6F6F"}
          style={styles.linearEssentional}
          icon={icon}
        />
      </View>
      <Text
        style={[
          styles.textWrapper,   
          state.state === "selected" ? styles.selectedText : styles.defaultText,
        ]}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};

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
  linearEssentional: {
    // Removed fixed height/width since we're using size prop
  },
  textWrapper: {
    alignSelf: "stretch",
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

