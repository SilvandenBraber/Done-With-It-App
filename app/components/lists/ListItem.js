import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from "../../config/colors";

import { Text } from "../text";

function ListItem({
  title,
  subTitle,
  disableChevron,
  image,
  IconComponent,
  numberOfLines = 1,
  style,
  onPress,
  onSwipeRight,
}) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={onSwipeRight}>
        <TouchableHighlight onPress={onPress} underlayColor={colors.lightGrey}>
          <View style={[styles.container, style]}>
            {IconComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.detailsContainer}>
              <Text style={styles.title} numberOfLines={numberOfLines}>
                {title}
              </Text>
              {subTitle && (
                <Text style={styles.subTitle} numberOfLines={numberOfLines}>
                  {subTitle}
                </Text>
              )}
            </View>
            {!disableChevron && (
              <MaterialCommunityIcons
                color={colors.mediumGrey}
                name="chevron-right"
                size={25}
              />
            )}
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.white,
    flexDirection: "row",
    padding: 15,
    width: "100%",
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 10,
  },
  image: {
    borderRadius: 35,
    height: 70,
    width: 70,
  },
  subTitle: {
    color: colors.mediumGrey,
  },
  title: {
    fontWeight: "500",
  },
});

export default ListItem;
