import React, { useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";

import Icon from "./Icon";
import { ListItem, ListItemSeparator } from "../lists";
import { Screen } from "../screenComponent";

const menuItems = [
  { title: "Edit listing", name: "pencil-box", id: 1, onPress: () => {} },
  { title: "Add to favorites", name: "star", id: 2, onPress: () => {} },
  { title: "Share Listing", name: "share-variant", id: 3, onPress: () => {} },
  { title: "Send Mosh a message", name: "message", id: 4, onPress: () => {} },
  { title: "Report an issue", name: "alert", id: 5, onPress: () => {} },
];

function TouchableIconModal({ color, name, size, ...otherProps }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <TouchableOpacity onPress={() => setModalVisible(true)}>
      <MaterialCommunityIcons
        color={color}
        name={name}
        size={size}
        {...otherProps}
      />
      <Modal
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <Screen style={styles.screen}>
          <FlatList
            style={styles.list}
            data={menuItems}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <ListItem
                  title={item.title}
                  onPress={item.onPress}
                  IconComponent={
                    <Icon
                      name={item.name}
                      color={colors.primary}
                      backgroundColor={colors.white}
                    />
                  }
                />
              </TouchableOpacity>
            )}
            ItemSeparatorComponent={ListItemSeparator}
            scrollEnabled={false}
          />
          <View style={styles.cancel}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <View style={styles.container}>
                <MaterialCommunityIcons
                  name="close-circle"
                  color={colors.white}
                  size={40}
                />
              </View>
            </TouchableOpacity>
          </View>
        </Screen>
      </Modal>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderColor: colors.white,
    borderRadius: 40,
    borderWidth: 10,
    height: 80,
    top: 15,
    justifyContent: "center",
    width: 80,
  },
  cancel: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: colors.white,
  },

  screen: {
    flex: 1,
    paddingTop: 200,
  },
});

export default TouchableIconModal;
