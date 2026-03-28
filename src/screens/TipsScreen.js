// TipsScreen.js
// Screen that shows pet care tips with automatic rotation

import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CARE_TIPS } from '../data/tipsData';
import TipsStyles from '../styles/TipsStyles';

// Maximum number of tips available
const MAX_TIPS = CARE_TIPS.length;

export default function TipsScreen() {
  // State to track the current tip index
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect with empty array + cleanup — rotates tips every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % MAX_TIPS);
    }, 5000);

    // Cleanup: clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  // useEffect with dependency — runs every time currentIndex changes
  useEffect(() => {
    console.log(`Now showing tip ${currentIndex + 1} of ${MAX_TIPS}`);
  }, [currentIndex]);

  // Function to manually advance to the next tip
  const handleNextTip = () => {
    setCurrentIndex((prev) => (prev + 1) % MAX_TIPS);
  };

  return (
    <SafeAreaView style={TipsStyles.container}>
      <Text style={TipsStyles.title}>Consejos de Cuidado 🐾</Text>
      <Text style={TipsStyles.counter}>
        Consejo {currentIndex + 1} de {MAX_TIPS}
      </Text>

      <View style={TipsStyles.card}>
        <Text style={TipsStyles.tipTitle}>
          {CARE_TIPS[currentIndex].title}
        </Text>
        <Text style={TipsStyles.tipDescription}>
          {CARE_TIPS[currentIndex].description}
        </Text>
      </View>

      <TouchableOpacity
        style={TipsStyles.nextButton}
        onPress={handleNextTip}
      >
        <Text style={TipsStyles.nextButtonText}>Siguiente consejo →</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}