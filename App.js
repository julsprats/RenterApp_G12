import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// screens
import SearchScreen from './screens/SearchScreen';
import MyReservationsScreen from './screens/MyReservationsScreen';

// icons
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Search') {
              return <MaterialIcons name="map" size={24} color={color} />;
            }
            if (route.name === 'My Reservations') {
              return <MaterialIcons name="person-search" size={24} color={color} />;
            }
          },
          tabBarActiveTintColor: 'crimson',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Search Screen" component={SearchScreen} />
        <Tab.Screen name="My Reservations" component={MyReservationsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});