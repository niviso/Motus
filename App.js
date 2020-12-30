import React,{useEffect,useState} from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {AppProvider} from './context/appContext';
import GameScreen from './screens/gameScreen/';
import Menu from './components/menu';
import ProfileImages from './components/profileImages';
import { Logs } from 'expo'
Logs.enableExpoCliLogging()
function StartScreen({ route, navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ProfileImages/>
    </View>
  );
}

function CreateScreen({ route, navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>CreateScreen Screen</Text>
    </View>
  );
}



const Stack = createStackNavigator();

function App() {
  return (
    <AppProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: null}} initialRouteName="GameScreen">
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="CreateScreen" component={CreateScreen} />
        <Stack.Screen name="GameScreen" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    <Menu/>
    </AppProvider>
  );
}

export default App;
