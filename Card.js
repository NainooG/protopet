import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";


const Card = ({ name, age, breed, image }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>Name: {name}</Text>
      <Text style={styles.text}>Age: {age}</Text>
      <Text style={styles.text}>Breed: {breed}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 16,
    margin: 16,
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 8,
  },
  image: {
    width: 200, 
    height: 200,
     
  },
});

export default Card;
