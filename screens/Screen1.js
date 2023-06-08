import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const Screen1 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Biografia Curta</Text>
      <Text style={styles.paragraph}>
        Cássio Roberto Ramos (Veranópolis, 6 de junho de 1987) é um futebolista brasileiro que atua como goleiro. Atualmente joga no Corinthians.
      </Text>
      <Text style={styles.paragraph}>
        Cássio começou sua carreira no Grêmio e, em pouco tempo jogando no clube, foi promovido à equipe principal. Passou pelos clubes europeus PSV Eindhoven, onde conquistou o título da Eredivisie 2007–08 e o título da Supercopa dos Países Baixos de 2008, e pelo clube Sparta Rotterdam, até chegar ao Corinthians no final de 2011.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'justify',
    lineHeight: 24,
  },
  title: {
      font: 'Impact',
      fontSize: 28,
      fontWeight: 'bold',
      marginRight: 10,
    },
});

export default Screen1;
