import React from "react";
import { StyleSheet } from "react-native";

import colors from "../../config/colors";

import { Text } from "../text";

function ErrorMessage({ error, visible, style }) {
  if (!visible || !error) return null;

  return <Text style={[styles.error, style]}>{error}</Text>;
}

const styles = StyleSheet.create({
  error: {
    color: colors.danger,
  },
});

export default ErrorMessage;
