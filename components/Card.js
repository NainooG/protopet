import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native";
import { animals } from "../SwipeCards" 


const Card = ({ name, age, breed }) => {
  return (
    <View style={styles.card}>
      <SafeAreaView className="overflow-hidden w-[200px] h-[200px] ">
        <Image
          source={image}
        />
      </SafeAreaView>
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
});

export default Card;
