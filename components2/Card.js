import React from "react";
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, Touchable } from "react-native";
import { SafeAreaView } from "react-native"; 

const Card = ({ name, age, breed, image, shelterLink }) => {

const handleShelterButton = () => { 

};

  return (
    <View style={styles.card}>
      <Image className="rounded-md" style={styles.image} source={image} />
      <SafeAreaView>
        <Text style={styles.text}>Name: {name}</Text>
        <Text style={styles.text}>Age: {age}</Text>
        <Text style={styles.text}>Breed: {breed}</Text>
        <TouchableOpacity 
          className="p-4 bg-blue-500 rounded-full mt-2 items-center justify-center py-3 w-[200px]"
        >
          <Text className="text-white">
            Shelter
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 15,
    borderWidth: 4,
    borderColor: "#ccc",
    padding: 20,
    margin: 16,
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    marginTop: 5,
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default Card;