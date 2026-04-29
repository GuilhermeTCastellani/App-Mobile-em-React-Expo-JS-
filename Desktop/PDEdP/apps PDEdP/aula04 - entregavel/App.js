import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import ProductDetail from './src/screens/ProductDetail';
import Info from './src/screens/Info';
import { COLORS, FONTS } from './src/constants/theme';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: COLORS.primaryDark },
          headerTintColor: COLORS.white,
          headerTitleStyle: { fontFamily: FONTS.serif, fontWeight: '600', fontSize: 17 },
          headerTitleAlign: 'center',
          contentStyle: { backgroundColor: COLORS.background },
        }}
      >
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ title: 'Produtos' }} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} options={{ title: 'Detalhes' }} />
        <Stack.Screen name="Info" component={Info} options={{ title: 'Grupo' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
