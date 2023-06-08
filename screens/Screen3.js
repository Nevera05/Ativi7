import React from 'react';
import { View, Text, Button, StyleSheet, Image, ImageBackground} from 'react-native';

const HomeScreen = ({ navigation }) => {
  
  const styles = StyleSheet.create({
    title: {
      font: 'Impact',
      fontSize: 30,
      fontWeight: 'bold',
    },
    imageBackground: {
    flex: 1,
    resizeMode: 'cover', 
    justifyContent: 'center',
  },
  });
  
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('../assets/taca.jpg')}
        style={styles.imageBackground}
      >
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.title}>Mundial de Clubes 2012</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
