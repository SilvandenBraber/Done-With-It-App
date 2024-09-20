import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

import colors from "../../config/colors";

import { Text } from "../text";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function OfflineNotice(props) {
  const netInfo = useNetInfo();

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <View style={styles.detailsContainer}>
          <MaterialCommunityIcons
            name="wifi-off"
            size={20}
            color={colors.white}
          />
          <Text style={styles.text}>No Internet Connection</Text>
        </View>
      </View>
    );

  return null;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    height: 50,
    justifyContent: "center",
    opacity: 0.95,
    position: "absolute",
    top: Constants.statusBarHeight,
    width: "100%",
    zIndex: 1,
  },
  detailsContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    color: colors.white,
    fontWeight: "500",
    marginLeft: 5,
  },
});

export default OfflineNotice;
