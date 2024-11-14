import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { newsData } from '../data/newsData';
import { RootStackParamList } from '../navigation/Navigation';

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

const DetailScreen = () => {
  const route = useRoute<DetailScreenRouteProp>();
  const newsItem = newsData.find((item) => item.id === route.params.newsId);

  if (!newsItem) return null;

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={newsItem.image} style={styles.image} />
        <Text style={styles.title}>{newsItem.title}</Text>
        <Text style={styles.content}>{newsItem.content}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    padding: 16 
  },
  image: { 
    width: '100%', height: 200 
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginVertical: 8 
  },
  content: { 
    fontSize: 16 
  },
});

export default DetailScreen;
