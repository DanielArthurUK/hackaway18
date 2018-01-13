import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { retrieveRandomOpinion, retrieveGifUrlForString } from './utilities/TweetGenerator'

export default class App extends React.Component {
    render() {
        var opinion = retrieveRandomOpinion();
        console.log(opinion.string + " " + opinion.emoji);

        retrieveGifUrlForString(opinion.emoji).then(function (url) {
            console.log(url);
        });

        return (
            <View style={styles.container}>
                <Text>{opinion.string + " " + opinion.emoji}</Text>
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
