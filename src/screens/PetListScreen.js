
// Main screen that shows the list of registered pets

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PetListStyles from '../styles/PetListStyles';

// Initial sample data to simulate an API response
const INITIAL_PETS = [
  {
    id: '1',
    name: 'Luna',
    species: 'Perro',
    breed: 'Labrador',
    age: 3,
    weight: 25,
    emoji: '🐶',
  },
  {
    id: '2',
    name: 'Michi',
    species: 'Gato',
    breed: 'Siamés',
    age: 2,
    weight: 4,
    emoji: '🐱',
  },
  {
    id: '3',
    name: 'Pico',
    species: 'Pájaro',
    breed: 'Canario',
    age: 1,
    weight: 0.5,
    emoji: '🐦',
  },
];

export default function PetListScreen({ navigation }) {
  // State that holds the array of pets
  const [pets, setPets] = useState([]);

  // useEffect with empty array [] — runs only once when screen loads
  // Simulates loading data from an API
  useEffect(() => {
    setPets(INITIAL_PETS);
  }, []);

  // Function that renders each pet card
  const renderPetCard = ({ item }) => (
    <TouchableOpacity
      style={PetListStyles.card}
      onPress={() => navigation.navigate('PetDetail', { pet: item })}
    >
      <Text style={PetListStyles.petEmoji}>{item.emoji}</Text>
      <View style={PetListStyles.petInfo}>
        <Text style={PetListStyles.petName}>{item.name}</Text>
        <Text style={PetListStyles.petSpecies}>{item.species}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={PetListStyles.container}>
      <Text style={PetListStyles.title}>Mis Mascotas 🐾</Text>
      <FlatList
        data={pets}
        keyExtractor={(item) => item.id}
        renderItem={renderPetCard}
        ListEmptyComponent={
          <Text style={PetListStyles.emptyText}>No hay mascotas registradas</Text>
        }
      />
    </SafeAreaView>
  );
}