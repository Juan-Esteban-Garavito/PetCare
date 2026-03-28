// PetDetailStyles.js
// Styles for PetDetailScreen component

import { StyleSheet } from 'react-native';

const PetDetailStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
    padding: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  emoji: {
    fontSize: 60,
    textAlign: 'center',
    marginBottom: 16,
  },
  petName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a1a2e',
    textAlign: 'center',
    marginBottom: 24,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  infoLabel: {
    fontSize: 15,
    color: '#9e9e9e',
    fontWeight: '500',
  },
  infoValue: {
    fontSize: 15,
    color: '#1a1a2e',
    fontWeight: 'bold',
  },
  favoriteButton: {
    marginTop: 24,
    backgroundColor: '#4361ee',
    borderRadius: 10,
    padding: 14,
    alignItems: 'center',
  },
  favoriteButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    marginTop: 12,
    borderRadius: 10,
    padding: 14,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#4361ee',
  },
  backButtonText: {
    color: '#4361ee',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PetDetailStyles;