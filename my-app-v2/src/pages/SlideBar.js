import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import {
  Provider as PaperProvider,
  Appbar,
  Text,
  IconButton,
} from "react-native-paper";

const SlideBar = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); // State for tracking selected item
  const [hoveredItem, setHoveredItem] = useState(null); // State for tracking hovered item
  const translateX = new Animated.Value(-350);

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: drawerVisible ? 0 : -350,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [drawerVisible]);

  const toggleDrawer = () => {
    setDrawerVisible((prevState) => !prevState);
  };

  const closeDrawer = () => {
    if (drawerVisible) {
      toggleDrawer();
    }
  };

  const drawerItems = [
    { label: "Home", key: "first", icon: "home" },
    { label: "Notifications", key: "second", icon: "bell" },
    { label: "Favorites", key: "third", icon: "star" },
    { label: "Technical Support", key: "fourth", icon: "headset" },
    { label: "My Certificates", key: "fifth", icon: "certificate" },
    { label: "Privacy Policy", key: "sixth", icon: "shield-lock" },
  ];

  return (
    <PaperProvider>
      {/* <NavigationContainer> */}
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Action icon="menu" onPress={toggleDrawer} />
          <Appbar.Content title="AI Drawer App" />
        </Appbar.Header>

        {drawerVisible && (
          <TouchableWithoutFeedback onPress={closeDrawer}>
            <View style={styles.overlay} />
          </TouchableWithoutFeedback>
        )}

        <Animated.View style={[styles.drawer, { transform: [{ translateX }] }]}>
          <View style={styles.drawerHeader}>
            <Text variant="displayMedium" style={styles.drawerTitle}>
              AI
            </Text>
          </View>
          <View style={styles.drawerContent}>
            {drawerItems.map((item) => (
              <TouchableOpacity
                key={item.key}
                style={[
                  styles.drawerItem,
                  selectedItem === item.key || hoveredItem === item.key
                    ? styles.selectedItem
                    : null,
                ]}
                onPress={() => {
                  setSelectedItem(item.key);
                  console.log(`Selected: ${item.label}`);
                  closeDrawer();
                }}
                onPressIn={() => setHoveredItem(item.key)}
                onPressOut={() => setHoveredItem(null)}
              >
                <IconButton
                  icon={item.icon}
                  size={25}
                  iconColor={
                    selectedItem === item.key || hoveredItem === item.key
                      ? "#6200ee"
                      : "#000"
                  }
                />
                <Text
                  variant="titleMedium"
                  style={[
                    styles.drawerItemText,
                    (selectedItem === item.key || hoveredItem === item.key) &&
                      styles.selectedText,
                  ]}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </Animated.View>

        <View style={styles.content}>
          <TouchableOpacity
            onPress={() => console.log("Main content pressed!")}
          >
            <View style={styles.button}>
              <Text>Press me</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {/* </NavigationContainer> */}
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 0,
  },
  drawer: {
    position: "absolute",
    width: 300,
    height: "100%",
    backgroundColor: "#fff", // Set the drawer background to white
    zIndex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
  },
  drawerHeader: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  drawerTitle: {
    color: "#6200ee",
    marginTop: 30,
  },
  drawerContent: {
    padding: 10,
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 5,
  },
  selectedItem: {
    backgroundColor: "#ece0fd",
  },
  selectedText: {
    color: "#6200ee",
  },
  drawerItemText: {
    marginLeft: 10,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    padding: 20,
    backgroundColor: "lightblue",
    borderRadius: 10,
  },
});

export default SlideBar;
