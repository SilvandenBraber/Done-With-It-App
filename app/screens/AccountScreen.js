import React from "react";
import { StyleSheet, View, FlatList, Alert } from "react-native";

import colors from "../config/colors";
import useAuth from "../auth/useAuth";

import { Icon } from "../components/icons";
import { Screen } from "../components/screenComponent";
import { ListItem, ListItemSeparator } from "../components/lists";

const menuItems = [
  {
    title: "My Listings",
    icon: { name: "format-list-bulleted", backgroundColor: colors.primary },
    targetScreen: "UserProfile",
  },
  {
    title: "My Messages",
    icon: { name: "email", backgroundColor: colors.secondary },
    targetScreen: "Messages",
  },
];

function AccountScreen({ navigation }) {
  const { user, logOut } = useAuth();

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          image={require("../images/johnAI.jpg")}
          title={user.name}
          subTitle={user.email}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
          scrollEnabled={false}
        />
      </View>
      <View>
        <ListItem
          title="Log Out"
          IconComponent={<Icon name="logout" backgroundColor={"#ffe66d"} />}
          onPress={() =>
            Alert.alert(
              "Log out",
              "Are you sure you want to log out?",
              [
                {
                  text: "No",
                  onPress: () => {},
                  style: "cancel",
                },
                {
                  text: "Yes",
                  onPress: () => logOut,
                },
              ],
              {
                cancelable: false,
              }
            )
          }
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.lightGrey,
  },
});

export default AccountScreen;
