import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { db } from '../firebaseConfig';

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Search Screen</Text>
    </View>
  );
};

SearchScreen.navigationOptions = {
  tabBarLabel: 'Search Screen',
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

export default SearchScreen;