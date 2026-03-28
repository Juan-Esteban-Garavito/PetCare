// RegisterPetStyles.js
// Styles for RegisterPetScreen component

import { StyleSheet } from 'react-native';

const RegisterPetStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a2e',
    marginBottom: 24,
  },
  input: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 14,
    fontSize: 15,
    color: '#1a1a2e',
    marginBottom: 12,
    borderWidth: 1.5,
    borderColor: '#e0e0e0',
    elevation: 1,
  },
  registerButton: {
    backgroundColor: '#4361ee',
    borderRadius: 10,
    padding: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  registerButtonDisabled: {
    backgroundColor: '#b0bec5',
    borderRadius: 10,
    padding: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  registerButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  clearButton: {
    borderRadius: 10,
    padding: 14,
    alignItems: 'center',
    marginTop: 8,
    borderWidth: 1.5,
    borderColor: '#4361ee',
  },
  clearButtonText: {
    color: '#4361ee',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RegisterPetStyles;