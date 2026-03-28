// AppNavigator.js
// Main navigation configuration combining Tab and Stack navigation

import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import HomeScreen from '../screens/HomeScreen';
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
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#1b5e20' },
        headerTintColor: '#ffffff',
        headerTitleStyle: { fontWeight: 'bold' },
        headerTitleAlign: 'center',
      }}
    >
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
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#a5d6a7',
        tabBarStyle: {
          backgroundColor: '#1b5e20',
          borderTopWidth: 0,
          elevation: 10,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: () => (
            <Text style={{ fontSize: 20 }}>🏠</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Mascotas"
        component={PetsStack}
        options={{
          tabBarLabel: 'Mascotas',
          tabBarIcon: () => (
            <Text style={{ fontSize: 20 }}>🐾</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Registrar"
        component={RegisterPetScreen}
        options={{
          tabBarLabel: 'Registrar',
          tabBarIcon: () => (
            <Text style={{ fontSize: 20 }}>➕</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Consejos"
        component={TipsScreen}
        options={{
          tabBarLabel: 'Consejos',
          tabBarIcon: () => (
            <Text style={{ fontSize: 20 }}>💡</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}