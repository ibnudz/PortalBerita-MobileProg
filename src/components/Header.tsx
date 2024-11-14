import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/logo.png')} style={styles.logo} />
      {/* <Text style={styles.label}>Country News</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '#fff',
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
  },
//   label: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 12,
//     marginLeft: 8,
//   },
});

export default Header;
