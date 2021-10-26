import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';

import Title from './src/components/Title';
import Form from './src/components/Form';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Title />
          <Form />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop: 80,
  },
});
