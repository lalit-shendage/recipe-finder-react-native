import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { COLORS, icons } from "../../Constant";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Home page",
          headerStyle: styles.header,
        }}
      />
      <Tabs.Screen
        name="favourites"
        options={{
          headerTitle: "favourites",
          headerStyle: styles.header,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.headerBG,
  },
  icons: {

  }
});
