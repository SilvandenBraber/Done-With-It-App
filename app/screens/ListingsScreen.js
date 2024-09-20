import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import AnimatedLottieView from "lottie-react-native";

import colors from "../config/colors";
import listingApi from "../api/listings";
import routes from "../navigation/routes";
import { useApi, useRefresh } from "../hooks";

import {
  ActivityIndicator,
  RefreshingControl,
} from "../components/loadingAnimations";
import { Card } from "../components/cards";
import { Screen } from "../components/screenComponent";
import { Text } from "../components/text";
import { Button } from "../components/buttons";

function ListingsScreen({ navigation }) {
  const getListingsApi = useApi(listingApi.getListings);
  const { refreshing, handleRefresh } = useRefresh(getListingsApi.request);

  useEffect(() => {
    getListingsApi.request();
  }, []);

  return (
    <Screen style={styles.screen}>
      {getListingsApi.error && (
        <View style={styles.errorMessage}>
          <AnimatedLottieView
            autoPlay
            source={require("../animations/errorIconSad.json")}
            style={styles.errorAnimation}
          />

          <Text style={styles.errorText}>
            Couldn't retrieve the listings...
          </Text>
          <Button title="retry" onPress={getListingsApi.request} />
        </View>
      )}
      {!refreshing && (
        <ActivityIndicator
          visible={getListingsApi.loading}
          style={styles.loaderAnimation}
        />
      )}
      <FlatList
        data={getListingsApi.data.slice().reverse()}
        keyExtractor={(listing) => listing.id.toString()}
        refreshControl={
          <RefreshingControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
          />
        }
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            thumbnailUrl={item.images[0].thumbnailUrl}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.lightGrey,
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  errorMessage: {
    alignItems: "center",
    height: "100%",
    padding: 20,
    justifyContent: "center",
  },
  errorText: {
    marginVertical: 10,
  },
  errorAnimation: {
    height: 100,
    width: 100,
  },
  refreshAnimation: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default ListingsScreen;
