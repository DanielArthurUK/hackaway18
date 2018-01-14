import React from 'react';
import LoginScreen from './components/LoginScreen';
import AuthorizeScreen from "./components/AuthorizeScreen";
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
        AuthorizeScreen: {screen: AuthorizeScreen},
        TweetScreen: {screen: TweetScreen},
    },
    {
        headerMode: "float",
        navigationOptions: {
            headerTitle: "Tweetophile",
            headerTintColor: "#E91E63",
        },
    }
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;
