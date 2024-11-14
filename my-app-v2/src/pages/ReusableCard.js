// modify ReusableCard
import React from 'react';
import { Card, Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const ReusableCard = ({ title, subtitle, dueDate, icon, onPress, iconColor, dueDateColor }) => {
  return (
    <Card style={styles.card} onPress={onPress}>
      <Card.Content>
        <MaterialIcons name={icon} size={30} color={iconColor} />
        <Text variant='titleMedium' style={styles.title}>{title}</Text>
        <Text variant='bodyMedium' style={styles.subtitle}>{subtitle}</Text>
        <Text variant='bodySmall' style={[styles.dueDate, { color: dueDateColor }]}>Due Date: {dueDate}</Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent background
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
    elevation: 0,
    shadowColor: "transparent",
  },
  title: {
    color: "#fff",
  },
  subtitle: {
    color: "#fff",
  },
  dueDate: {
    marginTop: 14,
  },
});

export default ReusableCard;

