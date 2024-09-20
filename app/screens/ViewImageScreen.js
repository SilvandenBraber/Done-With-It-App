import React from "react";
import { View, StyleSheet, Image, Alert } from "react-native";

import colors from "../config/colors";

import { TouchableIcon } from "../components/icons";
import { useNavigation } from "@react-navigation/native";

function ViewImageScreen({ route }) {
  const navigation = useNavigation();
  const imageUrl = route.params?.imageUrl;

  return (
    <View style={styles.container}>
      <View style={styles.btnContainer}>
        <TouchableIcon
          color="white"
          name="close"
          onPress={() => navigation.goBack()}
        />

        <TouchableIcon
          color="white"
          name="trash-can-outline"
          onPress={() =>
            Alert.alert(
              "Delete Image",
              "Are you sure you want to delete this image?",
              [
                { text: "No", onPress: () => {} },
                {
                  text: "Yes",
                  onPress: () => {},
                },
              ]
            )
          }
        />
      </View>
      <Image
        source={{ uri: imageUrl }}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    position: "absolute",
    top: 80,
    width: "100%",
    zIndex: 1,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

export default ViewImageScreen;
