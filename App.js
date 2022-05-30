import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import Detail from './components/Detail';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
            
      <Stack.Navigator>
                       
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Data Karyawan',
            headerStyle: { backgroundColor: '#006aff' },
            headerTintColor: '#fff',
          }}
        />
                        
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            title: 'Detail Karyawan',
            headerStyle: { backgroundColor: '#006aff' },
            headerTintColor: '#fff',
          }}
        />
               
      </Stack.Navigator>
           
    </NavigationContainer>
  );
}
