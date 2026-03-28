// PetListStyles.js
// Styles for PetListScreen component

import { StyleSheet } from 'react-native';

const PetListStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0faf0',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1b5e20',
    marginBottom: 16,
    
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: 4,
    borderLeftColor: '#2e7d32',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  petEmoji: {
    fontSize: 40,
    marginRight: 16,
  },
  petInfo: {
    flex: 1,
  },
  petName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1b5e20',
  },
  petSpecies: {
    fontSize: 14,
    color: '#2e7d32',
    marginTop: 4,
    fontWeight: '500',
  },
  emptyText: {
    textAlign: 'center',
    color: '#9e9e9e',
    marginTop: 40,
    fontSize: 15,
  },
});

export default PetListStyles;