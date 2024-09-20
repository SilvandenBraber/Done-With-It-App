import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { Text } from "../text";

function PickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{item.label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: {
    padding: 20,
  },
});

export default PickerItem;
