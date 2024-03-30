import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { db } from '../firebaseConfig';

const MyReservationsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>My Reservations Screen</Text>
    </View>
  );
};

MyReservationsScreen.navigationOptions = {
  tabBarLabel: 'My Reservations',
  tabBarIcon: ({ color, size }) => (
    <MaterialIcons name="person-search" size={size} color={color} />
  ),
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default MyReservationsScreen;