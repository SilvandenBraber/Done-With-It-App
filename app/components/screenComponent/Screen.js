import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
} from "react-native";
import Constants from "expo-constants";

function Screen({ children, style, dismissKeyboardOnTouch = true }) {
  const handleDismissKeyboardOnTouch = () => {
    if (dismissKeyboardOnTouch) {
      Keyboard.dismiss();
    }
  };
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <StatusBar hidden={true} barStyle="dark-content" />
      <TouchableWithoutFeedback onPress={handleDismissKeyboardOnTouch}>
        <View style={[styles.view, style]}>{children}</View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  view: {
    flex: 1,
  },
});

export default Screen;
