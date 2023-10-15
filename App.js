import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LikesScreen from './components2/LikesScreen';
import HomeScreen from './components2/HomeScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Likes" component={LikesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
