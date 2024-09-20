import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../../config/colors";

function SwipeDown({
  borderRadius,
  color = colors.white,
  height = 6,
  onPress,
  opacity,
  style,
  width = 80,
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          style,
          {
            backgroundColor: color,
            borderRadius: borderRadius,
            width: width,
            height: height,
            opacity: opacity,
          },
        ]}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});

export default SwipeDown;
