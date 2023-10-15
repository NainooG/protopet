import React from "react";
import { View } from "react-native";
import SwipeCards from "react-native-swipe-cards";
import Card from "./Card";
import { useState } from "react";

export const animals = [
  { id: 1, name: "Catito", age: 3, breed: "American Shorthair", image: require('../assets/cat1.jpg') },
  { id: 2, name: "Mustard", age: 2, breed: "Corgi" , image: require('../assets/dog1.jpg')},
  { id: 3, name: "Iggy", age: 2, breed: "Pug", image: require('../assets/dog2.jpg') },
  { id: 4, name: "Hotdog ", age: 4, breed: "Unknown", image: require('../assets/dog3.jpg')},
];
 
const SwipeCardsScreen= () => {
  const handleYup = (animal) => {
    // Handle right swipe action
    setIndex(index + 1);
  };

  const handleNope = (animal) => {
    // Handle left swipe action
    setIndex(index + 1);
  };

  const [index, setIndex] = useState(0);
  return (
    <View className="flex-1 justify-center items-center">
      <SwipeCards
        cards={animals}
        len = {animals.length}
        renderCard={(animal) => <Card {...animal} />}

        handleYup={handleYup}
        handleNope={handleNope}
        hasMaybeAction={false}
      />

    </View>
  );
};

export default SwipeCardsScreen;