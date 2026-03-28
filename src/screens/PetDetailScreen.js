// Screen that shows the full detail of a selected pet

import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PetDetailStyles from '../styles/PetDetailStyles';

export default function PetDetailScreen({ navigation, route }) {
  // Receive the pet object sent from PetListScreen
  const { pet } = route.params;

  // Local state to handle favorite toggle
  const [isFavorite, setIsFavorite] = useState(false);

  // useEffect with dependency — runs every time 'pet' changes
  // Updates the header title dynamically
  useEffect(() => {
    navigation.setOptions({ title: pet.name });
  }, [pet]);

  // Function that toggles favorite state
  const handleFavoriteToggle = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <SafeAreaView style={PetDetailStyles.container}>
      <ScrollView>
        <View style={PetDetailStyles.card}>

          {/* Pet emoji and name */}
          <Text style={PetDetailStyles.emoji}>{pet.emoji}</Text>
          <Text style={PetDetailStyles.petName}>{pet.name}</Text>

          {/* Pet info rows */}
          <View style={PetDetailStyles.infoRow}>
            <Text style={PetDetailStyles.infoLabel}>Especie</Text>
            <Text style={PetDetailStyles.infoValue}>{pet.species}</Text>
          </View>

          <View style={PetDetailStyles.infoRow}>
            <Text style={PetDetailStyles.infoLabel}>Raza</Text>
            <Text style={PetDetailStyles.infoValue}>{pet.breed}</Text>
          </View>

          <View style={PetDetailStyles.infoRow}>
            <Text style={PetDetailStyles.infoLabel}>Edad</Text>
            <Text style={PetDetailStyles.infoValue}>{pet.age} años</Text>
          </View>

          <View style={PetDetailStyles.infoRow}>
            <Text style={PetDetailStyles.infoLabel}>Peso</Text>
            <Text style={PetDetailStyles.infoValue}>{pet.weight} kg</Text>
          </View>

          {/* Favorite button */}
          <TouchableOpacity
            style={PetDetailStyles.favoriteButton}
            onPress={handleFavoriteToggle}
          >
            <Text style={PetDetailStyles.favoriteButtonText}>
              {isFavorite ? '❤️ Guardado como favorito' : '🤍 Agregar a favoritos'}
            </Text>
          </TouchableOpacity>

          {/* Back button */}
          <TouchableOpacity
            style={PetDetailStyles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={PetDetailStyles.backButtonText}>← Volver</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}