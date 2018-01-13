import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Card, Text} from 'react-native-elements';
import {retrieveGifUrlForString, retrieveRandomOpinion, retrieveRandomCrimeStatistic} from "../utilities/TweetGenerator";

class TweetScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tweet : {
                content : "Waiting to retrieve your tweet!",
                gif : "http://hdimages.org/wp-content/uploads/2017/03/placeholder-image4.jpg",
            },
        }
    }

    componentDidMount() {
        this.handleRefreshTweet();
    }

    handleRefreshTweet = () => {
        const opinion = retrieveRandomOpinion();
        const tweetContent = opinion.string + " " + opinion.emoji;
        retrieveGifUrlForString(opinion.emoji, function (url) {
            console.log(url);
            this.setState({
                tweet: {
                    content: tweetContent,
                    gif: url,
                },
            });
        });
        // TODO: Pass in the current latitude/longitude.
        retrieveRandomCrimeStatistic('51.4256730', '-0.5630630', function (crimeStatistic) {
            console.log(crimeStatistic);
            // TODO: Add this to the tweet content.
        });
    };

    render() {
        return (
            <View style={styles.flexCenter}>
                <Text h3 style={styles.white}>Your tweet is ready!</Text>
                <Card
                    image={{uri: this.state.tweet.gif}}>
                    <Text style={{marginBottom: 10}}>
                        {this.state.tweet.content}
                    </Text>
                    <Button
                        style={{display:"block", marginBottom:10}}
                        icon={{name: "refresh", type: "material-icons"}}
                        rounded
                        title="Refresh"
                        backgroundColor="#E91E63"
                        onPress={this.handleRefreshTweet}
                    />
                    <Button
                        backgroundColor={twitterBlue}
                        rounded title="Tweet this!"
                        style={{display: "block", marginBottom:10}}
                    />
                </Card>
            </View>
        );
    }
}

const twitterBlue = '#00aced';

const styles = StyleSheet.create({
    flexCenter: {
        flex: 1,
        backgroundColor: '#00aced',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    white : {
        color: "#FFFFFF",
    },
});

export default TweetScreen;
