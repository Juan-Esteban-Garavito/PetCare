// HomeScreen.js
// Welcome screen shown when the app starts

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>PetCare 🐾</Text>
        <Text style={styles.headerSubtitle}>Tu gestor de mascotas</Text>
      </View>

      {/* Welcome card */}
      <View style={styles.card}>
        <Text style={styles.emoji}>🐶🐱🐦</Text>
        <Text style={styles.cardTitle}>¡Bienvenido!</Text>
        <Text style={styles.cardText}>
          Gestiona la información de tus mascotas de forma fácil y rápida.
        </Text>
      </View>

      {/* Buttons */}
      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => navigation.navigate('Mascotas')}
      >
        <Text style={styles.primaryButtonText}>Ver mis mascotas 🐾</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => navigation.navigate('Registrar')}
      >
        <Text style={styles.secondaryButtonText}>Registrar mascota ➕</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => navigation.navigate('Consejos')}
      >
        <Text style={styles.secondaryButtonText}>Ver consejos 💡</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0faf0',
    padding: 16,
  },
  header: {
    backgroundColor: '#1b5e20',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#a5d6a7',
    marginTop: 8,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    marginBottom: 24,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  emoji: {
    fontSize: 48,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1b5e20',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 15,
    color: '#7f8c8d',
    textAlign: 'center',
    lineHeight: 22,
  },
  primaryButton: {
    backgroundColor: '#1b5e20',
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButton: {
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1.5,
    borderColor: '#1b5e20',
  },
  secondaryButtonText: {
    color: '#1b5e20',
    fontSize: 16,
    fontWeight: 'bold',
  },
});