import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { retrieveRandomOpinion, retrieveGifUrlForString, retrieveRandomCrimeStatistic } from './utilities/TweetGenerator'

export default class App extends React.Component {
    render() {
        var opinion = retrieveRandomOpinion();
        console.log(opinion.string + " " + opinion.emoji);

        retrieveGifUrlForString(opinion.emoji, function (url) {
            console.log(url);
        });

        retrieveRandomCrimeStatistic('51.4256730', '-0.5630630', function (crimeStatistic) {
            console.log(crimeStatistic);
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
