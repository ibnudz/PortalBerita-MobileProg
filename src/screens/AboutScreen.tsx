import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/logo.png')} style={styles.logo} />
      <Text style={styles.title}>About This App</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eius ut eligendi harum. Ipsa, at. Perferendis ratione sequi qui ipsa iste neque reprehenderit tempore vero dolor. Cumque laboriosam inventore error?
      </Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates iste provident qui soluta. Dignissimos vero aliquid dolor earum doloribus officiis, enim esse incidunt fuga perspiciatis sit architecto vel, at ut?
      </Text>
      <Text style={styles.footer}>© 2024 Country News</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#fff', 
    alignItems: 'center' 
  },
  logo: { 
    width: 300, 
    height: 100, 
    marginBottom: 20 
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20 
  },
  description: { 
    fontSize: 16, 
    lineHeight: 24, 
    marginBottom: 16, 
    textAlign: 'center' 
  },
  footer: { 
    fontSize: 14, 
    color: 'gray', 
    marginTop: 20, 
    textAlign: 'center' 
  },
});

export default AboutScreen;
