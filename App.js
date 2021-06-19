import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './app/screens/HomeScreen/HomeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ HomeScreen } options={{ title: 'Home' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Testing!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
