import React from 'react';
import LoginScreen from './components/LoginScreen';
import TweetScreen from './components/TweetScreen';
import {
    StyleSheet, View
} from 'react-native';
import {
    StackNavigator
} from 'react-navigation';

const App = StackNavigator(
    {
        Login: {screen: LoginScreen},
        TweetScreen: {screen: TweetScreen},
    },
    {
        headerMode: "float",
        navigationOptions: {
            headerTitle: "Tweetophile",
            headerTintColor: "#00aced",
        },
    }
);

const twitterBlue = '#00aced';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;
