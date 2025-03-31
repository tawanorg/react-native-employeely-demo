import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '@/libs/design/components';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View style={styles.container}> 
        <Header title="Page not found!" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
