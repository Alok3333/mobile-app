import * as React from "react";
import { ScrollView, View, TouchableHighlight, StyleSheet } from "react-native";
import { Avatar, Card, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const ElectricalEngineeringScreen = ({ route }) => {
  const { item } = route.params;
  const navigation = useNavigation();

  const games = [
    { name: "Game1", title: "Electrical 1", icon: "ballot" },
  ];

  const handleNavigateToGame = (gameName) => {
    console.log(`Navigating to ${gameName}`);
    navigation.navigate(gameName);
  };

  return (
    <>
      <View style={styles.header}>
        <Text variant="headlineMedium" style={styles.headerText}>
          {item.menuTitle}
        </Text>
      </View>
      <ScrollView style={styles.container}>
        {games.map((game) => (
          <React.Fragment key={game.name}>
            <TouchableHighlight
              onPress={() => handleNavigateToGame(game.name)}
              underlayColor="#d1c4e9"
            >
              <Card style={styles.card}>
                <Card.Title
                  title={game.title}
                  subtitle={item.menuTitle}
                  left={(props) => <Avatar.Icon {...props} icon={game.icon} />}
                />
              </Card>
            </TouchableHighlight>
          </React.Fragment>
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4", // Light gray background
  },
  header: {
    padding: 20,
    backgroundColor: "#8F52FB", // Header background color
    alignItems: "center",
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    marginBottom: 20,
  },
  headerText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 24,
  },
  card: {
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: "#ffffff", // Card background color
    borderRadius: 15,
    elevation: 3, // Shadow effect for Android
    shadowColor: "#000", // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
    shadowOpacity: 0.2, // Shadow opacity for iOS
    shadowRadius: 2, // Shadow radius for iOS
  },
});

export default ElectricalEngineeringScreen;
