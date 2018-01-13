import React from 'react';
// import LoginScreen from './components/LoginScreen';
// import AuthorizeScreen from "./components/AuthorizeScreen";
import TweetScreen from './components/TweetScreen';
import {StyleSheet, View} from 'react-native';
import postToTwitter from './utilities/twitter';

export default class App extends React.Component {

    componentDidMount() {
        postToTwitter()
    }

    render() {
        return (
            <View style={styles.container}>
                <TweetScreen/>
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
