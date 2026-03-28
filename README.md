# PetCare 🐾

**Estudiantes:** Juan Esteban Garavito - Ximena Zapata  
**Asignatura:** Construcción de Software V / Desarrollo Móvil  
**Institución:** Tecnológico de Antioquia

## Descripción
PetCare es una aplicación móvil desarrollada con React Native CLI que permite gestionar información de mascotas. El usuario puede registrar mascotas, ver el listado, consultar el detalle de cada una y acceder a consejos de cuidado que rotan automáticamente.

## Tecnologías utilizadas
- React Native CLI
- React Navigation (Stack + Tab)
- useState y useEffect (Hooks)
- StyleSheet
- SafeAreaView


### Requisitos previos
- Node.js instalado
- Android Studio instalado
- Un dispositivo Android o emulador

### Pasos
1. Clonar el repositorio
   git clone https://github.com/Juan-Esteban-Garavito/PetCare.git

2. Entrar a la carpeta
   cd PetCare

3. Instalar dependencias
   npm install

4. Conectar dispositivo Android y ejecutar
   adb reverse tcp:8081 tcp:8081
   npx react-native run-android

## Estructura del proyecto
```
PetCare/
├── src/
│   ├── screens/
│   │   ├── HomeScreen.js
│   │   ├── PetListScreen.js
│   │   ├── PetDetailScreen.js
│   │   ├── RegisterPetScreen.js
│   │   └── TipsScreen.js
│   ├── navigation/
│   │   └── AppNavigator.js
│   ├── styles/
│   │   ├── PetListStyles.js
│   │   ├── PetDetailStyles.js
│   │   ├── RegisterPetStyles.js
│   │   └── TipsStyles.js
│   └── data/
│       └── tipsData.js
└── App.js
```

## Ramas
- `main` — rama de entrega final
- `juan-esteban` — desarrollo de Juan Esteban
- `ximena` — desarrollo de Ximena