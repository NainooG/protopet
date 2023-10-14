import React from "react";
import { View, StyleSheet, Button } from "react-native";
import SwipeCards from "react-native-swipe-cards";
import Card from "./Card";
import { useState } from "react";

export const animals = [
  { name: "Dog 1", age: 3, breed: "Labrador", image: require('./assets/cat1.jpg') },
  { name: "Dog 2", age: 2, breed: "Golden Retriever" , image: require('./assets/dog1.jpg')},
  { name: "Dog 3", age: 2, breed: "Golden Retriever", image: require('./assets/dog2.jpg') },
  { name: "Cat 1 ", age: 4, breed: "Husky", image: require('./assets/dog3.jpg')},
];
 
const SwipeCardsScreen= () => {
  const handleYup = (card) => {
    
  };

  const handleNope = (card) => {
    
  };

  const handleReset = (card) => { 
    
  }

  const [currentIndex, setCurrentIndex] = useState(0); 

  
  return (
    <View className="flex-1 justify-center items-center">
      <SwipeCards
        cards={animals}
        {...animals.map(() => { })}
        renderCard={(cardData) => <Card {...cardData} />}

        
        handleYup={handleYup}
        handleNope={handleNope}
        hasMaybeAction={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
  },
});

export default SwipeCardsScreen;
