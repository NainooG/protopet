import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LikesScreen from './components2/LikesScreen';
import HomeScreen from './components2/HomeScreen';
// import ShelterList from './components2/Shelter'

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Likes" component={LikesScreen} />
        {/* <Tab.Screen name="Search" component={ShelterList} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
