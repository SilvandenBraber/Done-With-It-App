import React, { useState } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../../config/styles";

function AppTextInput({
  icon,
  isDescription,
  name,
  onBlur,
  onChangeText,
  value,
  width = "100%",
  ...otherProps
}) {
  const [isInputFocused, setInputFocused] = useState(false);
  const [securePassword, setSecurePassword] = useState(true);

  const clearInput = () => {
    onChangeText("");
  };

  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.mediumGrey}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyles.colors.mediumGrey}
        style={[
          defaultStyles.text,
          styles.input,
          isDescription && styles.descriptionInput,
        ]}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={name === "password" && securePassword}
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
        {...otherProps}
      />
      {name === "password" && isInputFocused && (
        <TouchableOpacity onPress={() => setSecurePassword(!securePassword)}>
          {securePassword ? (
            <MaterialCommunityIcons
              name="eye"
              color={defaultStyles.colors.medium}
              size={18}
              style={{ opacity: 0.5 }}
            />
          ) : (
            <MaterialCommunityIcons
              name="eye-off"
              color={defaultStyles.colors.medium}
              size={18}
              style={{ opacity: 0.5 }}
            />
          )}
        </TouchableOpacity>
      )}
      {isInputFocused && name !== "password" && (
        <TouchableOpacity
          onPress={clearInput}
          style={[
            styles.clearIconContainer,
            isDescription && styles.description,
          ]}
        >
          <MaterialCommunityIcons
            name="close-circle"
            size={20}
            color={defaultStyles.colors.mediumGrey}
            style={styles.closeIcon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: defaultStyles.colors.lightGrey,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  clearIconContainer: {
    marginLeft: 5,
  },
  closeIcon: {
    opacity: 0.3,
  },
  descriptionInput: {
    flex: 0.93,
  },
  description: {
    position: "absolute",
    right: 15,
    top: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
  },
});

export default AppTextInput;
