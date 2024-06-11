import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export function increment(a, b) {
  return a + b;
}

export function App() {
  return (
    <View style={localStyles.main}>
      <Text>Hello World</Text>
    </View>
  );
}

const localStyles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
