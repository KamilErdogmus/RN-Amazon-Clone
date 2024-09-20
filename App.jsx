import {SafeAreaView, StatusBar, StyleSheet, Platform} from 'react-native';
import React from 'react';
import {Router} from './src/navigation/Router';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={Platform.OS === 'android' ? '#9ee4d4' : 'transparent'}
        barStyle={'dark-content'}
        translucent={Platform.OS === 'ios'}
      />
      <Router />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
