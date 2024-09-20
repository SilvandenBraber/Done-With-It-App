import React, { useRef } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { Image } from "react-native-expo-image-cache";
import colors from "../config/colors";

import { ListItem } from "../components/lists";
import { Screen } from "../components/screenComponent";
import { Text } from "../components/text";
import routes from "../navigation/routes";
import { SwipeDown } from "../components/detailComponents";
import { TouchableIcon } from "../components/icons";
import ContactSellerForm from "../components/ContactSellerForm";

function ListingDetailScreen({ navigation, route }) {
  const listing = route.params;

  return (
    <Screen>
      <ScrollView>
        <KeyboardAvoidingView
          behavior="position"
          keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
        >
          <View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() =>
                navigation.navigate(routes.VIEWIMAGE, {
                  imageUrl: listing.images[0].url,
                })
              }
            >
              <Image
                style={styles.image}
                preview={{ uri: listing.images[0].thumbnailUrl }}
                tint="light"
                uri={listing.images[0].url}
              />
            </TouchableOpacity>

            <SwipeDown
              borderRadius={5}
              opacity={0.4}
              style={styles.swipeDown}
              onPress={() => navigation.goBack()}
            />
          </View>
          <View style={styles.detailsContainer}>
            <View style={styles.listingHeadingContainer}>
              <Text style={styles.title}>{listing.title}</Text>
              <TouchableIcon
                name="dots-horizontal"
                color={colors.primary}
                modalEnabled
                size={35}
                style={{ bottom: 20, left: 10 }}
              />
            </View>
            <Text style={styles.price}>${listing.price}</Text>
            <Text style={styles.description}>{listing.description}</Text>
            <View style={styles.userContainer}>
              <ListItem
                image={require("../images/mosh.jpg")}
                title="Mosh Hamedani"
                subTitle="5 Listings"
              />
            </View>
            <ContactSellerForm listing={listing} />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  detailsContainer: {
    padding: 20,
  },
  swipeDown: {
    position: "absolute",
    alignSelf: "center",
    bottom: 288,
  },
  image: {
    height: 300,
    width: "100%",
  },
  listingHeadingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  title: {
    fontWeight: "500",
    fontSize: 24,
    marginRight: 10,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailScreen;
