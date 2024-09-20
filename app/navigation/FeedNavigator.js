import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailScreen from "../screens/ListingDetailScreen";
import { Platform } from "react-native";
import ViewImageScreen from "../screens/ViewImageScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator
    screenOptions={
      Platform.OS === "ios"
        ? {
            headerShown: false,
            ...TransitionPresets.ModalSlideFromBottomIOS,
          }
        : {
            headerShown: false,
            ...TransitionPresets.RevealFromBottomAndroid,
          }
    }
  >
    <Stack.Screen
      name="Listings"
      component={ListingsScreen}
      options={{ title: "Feed" }}
    />
    <Stack.Screen name="ListingDetails" component={ListingDetailScreen} />
    <Stack.Screen name="ViewImage" component={ViewImageScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
