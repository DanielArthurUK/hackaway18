import React from 'react';
import LoginScreen from './components/LoginScreen';
import TweetScreen from './components/TweetScreen';
import { StyleSheet, View } from 'react-native';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <TweetScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
