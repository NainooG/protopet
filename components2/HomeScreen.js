import React from "react";
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, Touchable, StatusBar } from "react-native";
import { SafeAreaView } from "react-native"; 
import SwipeCardsScreen from "./SwipeCards";


const Card = ({ name, age, breed, image, shelterLink }) => {


return (
  <SafeAreaView className="flex-1 bg-slate-300">
    <SafeAreaView className="items-center">
      <Text className="text-black font-bold text-3xl"> Protopet </Text>
    </SafeAreaView>
    <SafeAreaView className="flex-1 justify-center items-center mt-0">
      {<SwipeCardsScreen />}
    </SafeAreaView>
  </SafeAreaView>
);
}

export default Card;