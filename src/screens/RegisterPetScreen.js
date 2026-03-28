// RegisterPetScreen.js
// Screen for registering a new pet with a controlled form

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RegisterPetStyles from '../styles/RegisterPetStyles';

export default function RegisterPetScreen({ navigation }) {
  // Independent state for each form field
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');

  // State to enable/disable the register button
  const [isFormValid, setIsFormValid] = useState(false);

  // useEffect with dependencies — validates form in real time
  useEffect(() => {
    const allFieldsFilled =
      name.trim() !== '' &&
      species.trim() !== '' &&
      breed.trim() !== '' &&
      age.trim() !== '' &&
      weight.trim() !== '';
    setIsFormValid(allFieldsFilled);
  }, [name, species, breed, age, weight]);

  // Function that shows a summary alert with the pet data
  const handleRegister = () => {
    // Build the new pet object
    const newPet = {
      id: Date.now().toString(),
      name,
      species,
      breed,
      age: parseInt(age),
      weight: parseFloat(weight),
      emoji: '🐾',
    };

    Alert.alert(
      'Mascota Registrada',
      `Nombre: ${name}\nEspecie: ${species}\nRaza: ${breed}\nEdad: ${age} años\nPeso: ${weight} kg`,
      [{
        text: 'Aceptar',
        onPress: () => {
          handleClear();
          navigation.navigate('Mascotas', {
            screen: 'PetList',
            params: { newPet },
          });
        },
      }]
    );
  };

  // Function that resets all fields to their initial value
  const handleClear = () => {
    setName('');
    setSpecies('');
    setBreed('');
    setAge('');
    setWeight('');
  };

  return (
    <SafeAreaView style={RegisterPetStyles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView>
          <Text style={RegisterPetStyles.title}>Registrar Mascota 🐾</Text>

          <TextInput
            style={RegisterPetStyles.input}
            placeholder="Nombre de la mascota"
            placeholderTextColor="#9e9e9e"
            value={name}
            onChangeText={setName}
          />

          <TextInput
            style={RegisterPetStyles.input}
            placeholder="Especie (Perro, Gato, Pájaro...)"
            placeholderTextColor="#9e9e9e"
            value={species}
            onChangeText={setSpecies}
          />

          <TextInput
            style={RegisterPetStyles.input}
            placeholder="Raza (Labrador, Siamés...)"
            placeholderTextColor="#9e9e9e"
            value={breed}
            onChangeText={setBreed}
          />

          <TextInput
            style={RegisterPetStyles.input}
            placeholder="Edad en años"
            placeholderTextColor="#9e9e9e"
            value={age}
            onChangeText={setAge}
            keyboardType="numeric"
          />

          <TextInput
            style={RegisterPetStyles.input}
            placeholder="Peso en kg"
            placeholderTextColor="#9e9e9e"
            value={weight}
            onChangeText={setWeight}
            keyboardType="numeric"
          />

          <TouchableOpacity
            style={isFormValid ? RegisterPetStyles.registerButton : RegisterPetStyles.registerButtonDisabled}
            onPress={handleRegister}
            disabled={!isFormValid}
          >
            <Text style={RegisterPetStyles.registerButtonText}>Registrar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={RegisterPetStyles.clearButton}
            onPress={handleClear}
          >
            <Text style={RegisterPetStyles.clearButtonText}>Limpiar</Text>
          </TouchableOpacity>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}