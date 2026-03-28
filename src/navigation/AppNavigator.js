// Main navigation configuration combining Tab and Stack navigation

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import PetListScreen from '../screens/PetListScreen';
import PetDetailScreen from '../screens/PetDetailScreen';
import RegisterPetScreen from '../screens/RegisterPetScreen';
import TipsScreen from '../screens/TipsScreen';

// Create navigators
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Stack navigator for the Pets tab (List + Detail)
function PetsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PetList"
        component={PetListScreen}
        options={{ title: 'Mis Mascotas' }}
      />
      <Stack.Screen
        name="PetDetail"
        component={PetDetailScreen}
        options={{ title: 'Detalle' }}
      />
    </Stack.Navigator>
  );
}

// Main Tab navigator
export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#2c3e50',
        tabBarInactiveTintColor: '#aaa',
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Mascotas"
        component={PetsStack}
        options={{ tabBarLabel: 'Mascotas' }}
      />
      <Tab.Screen
        name="Registrar"
        component={RegisterPetScreen}
        options={{ tabBarLabel: 'Registrar' }}
      />
      <Tab.Screen
        name="Consejos"
        component={TipsScreen}
        options={{ tabBarLabel: 'Consejos' }}
      />
    </Tab.Navigator>
  );
}