import React, { useState } from "react";
import { Modal, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";
import { Text } from "../text";

import useAuth from "../../auth/useAuth";
import { StyleSheet } from "react-native";
import { ListItemSeparator } from "../lists";
import TouchableIconModal from "./TouchableIconModal";

function TouchableIcon({
  color = colors.white,
  name,
  modalEnabled,
  size = 35,
  onPress,
  ...otherProps
}) {
  return modalEnabled ? (
    <TouchableIconModal name={name} color={color} size={size} />
  ) : (
    <TouchableOpacity onPress={onPress}>
      <MaterialCommunityIcons
        color={color}
        name={name}
        size={size}
        {...otherProps}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cancelModal: {
    width: "100%",
    alignItems: "flex-end",
    justifyContent: "center",
    backgroundColor: colors.white,
    marginTop: 370,
    paddingRight: 10,
    height: 25,
  },
  modal: {
    backgroundColor: colors.white,
    alignSelf: "center",
    width: "95%",
    top: 0,
    flex: 0.8,
  },
  modalIcons: {
    marginRight: 25,
  },
  text: {
    textAlign: "left",
  },
  textBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
});

export default TouchableIcon;
