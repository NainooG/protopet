import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { animals } from './SwipeCards';

const LikesScreen = () => {
  const renderAnimalCard = ({ item }) => (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={item.image}
      />
      <Text style={styles.text}>Name: {item.name}</Text>
      <Text style={styles.text}>Age: {item.age}</Text>
      <Text style={styles.text}>Breed: {item.breed}</Text>
    </View>
  );

  return (
    <FlatList
      data={animals}
      keyExtractor={(item) => item.name}
      renderItem={renderAnimalCard}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 16,
    margin: 16,
    alignItems: 'center',
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

export default LikesScreen;
