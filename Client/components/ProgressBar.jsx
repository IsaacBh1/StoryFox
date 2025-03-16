import React from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";

export default function ProgressBar({
  progress = 0.5,
  containerColor = "#FFF1E7",
  trailColor = "#F76808",
}) {
  return (
    <View style={[styles.container, { backgroundColor: containerColor }]}>
      <View
        style={[
          styles.trail,
          {
            width: `${progress * 100}%`,
            backgroundColor: trailColor,
          },
        ]}
      />
    </View>
  );
}

ProgressBar.propTypes = {
  progress: PropTypes.number,
  containerColor: PropTypes.string,
  trailColor: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    width: 238,
    height: 11,
    borderRadius: 1000, // For pill shape
    overflow: "hidden",
    position: "relative",
  },
  trail: {
    height: "100%",
    position: "absolute",
    left: 0,
    top: 0,
    borderRadius: 1000,
  },
});

// Usage example:
// <ProgressBar progress={0.3} /> // 30% filled
