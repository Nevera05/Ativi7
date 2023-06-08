import React from 'react';
import { View, Text, Button, StyleSheet, Image, ImageBackground} from 'react-native';

const HomeScreen = ({ navigation }) => {
  const goToScreen2 = () => {
    navigation.navigate('Screen2', { param: 'Hello from HomeScreen' });
  };

  const styles = StyleSheet.create({
    title: {
      font: 'Impact',
      color: 'red',
      fontSize: 34,
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
        source={require('../assets/baixados.jpg')}
        style={styles.imageBackground}
      >
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.title}>Aplicativo do Cassio</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
