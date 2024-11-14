import * as React from "react";
import { ScrollView, View, TouchableHighlight, StyleSheet } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const CardItem = ({ route }) => {
  const { item } = route.params;
  const navigation = useNavigation();

  const games = [
    { name: "FindDiff", title: "FindDiff Game", icon: "trophy" },
    { name: "BetterAim", title: "BetterAim Game", icon: "trophy" },
    { name: "WordGuessing", title: "Word Guessing Game", icon: "trophy" },
    {
      name: "UltimateBattleGame",
      title: "X vs O: The Ultimate Battle",
      icon: "trophy",
    },
    { name: "DiceGame", title: "Dicey Decisions Game", icon: "trophy" },
    { name: "PacManGame", title: "PacMan Game", icon: "trophy" },
    {
      name: "CrosswordGrid",
      title: "Cross word guessing Game",
      icon: "trophy",
    },
    // { name: "ImgPuzzle", title: "Image Puzzle Game", icon: "trophy" },
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
            {/* <Divider /> */}
          </React.Fragment>
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
  header: {
    padding: 20,
    backgroundColor: "#8F52FB",
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
    backgroundColor: "#ffffff",
    borderRadius: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
});

export default CardItem;
