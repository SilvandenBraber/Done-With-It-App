import React from "react";
import AnimatedLottieView from "lottie-react-native";
import { View, StyleSheet } from "react-native";
import colors from "../../config/colors";

function ActivityIndicator({ visible = false, ...otherProps }) {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <AnimatedLottieView
        autoPlay
        loop
        source={require("../../animations/loading.json")}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    backgroundColor: colors.white,
    height: "100%",
    opacity: 0.6,
    width: "100%",
    zIndex: 1,
  },
});

export default ActivityIndicator;
