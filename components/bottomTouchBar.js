import React from 'react'; 
import { Text, StyleSheet, StatusBar} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}