import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const categories = [
  'Technology',
  'Sports',
  'Health',
  'Education',
  'Business',
  'Entertainment',
  'Politics',
];

const CategoriesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#fff' 
},
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20 
},
  categoryButton: {
    padding: 16,
    backgroundColor: '#6200ee',
    borderRadius: 8,
    marginBottom: 12,
    alignItems: 'center',
  },
  categoryText: { 
    color: '#fff', 
    fontSize: 18 
},
});

export default CategoriesScreen;
