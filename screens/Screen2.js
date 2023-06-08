import React from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';

const Screen2 = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../assets/baixados.jpg')}
        style={styles.image}
      />
      <Image
        source={require('../assets/esposa.jpg')}
        style={styles.image}
      />
      <Image
        source={require('../assets/correndo.jpg')}
        style={styles.image}
      />
      <Image
        source={require('../assets/almofada.jpg')}
        style={styles.image}
      />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 400,
    marginBottom: 20,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
});

export default Screen2;
