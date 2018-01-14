import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Card, Header, Text} from 'react-native-elements';
import {
    retrieveGifUrlForString, retrieveRandomCrimeStatistic,
    retrieveRandomOpinion, retrieveRandomTrumpQuote
} from "../utilities/TweetGenerator";


class TweetScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tweet: {
                reaction: "Waiting to retrieve your tweet!",
                gif: "http://hdimages.org/wp-content/uploads/2017/03/placeholder-image4.jpg",
                crimeStat: "",
                content: "",
            },
            accessCode: this.props.accessCode,
        }
    }

    componentDidMount() {
        this.handleRefreshTweet();
    }

    handleRefreshTweet = () => {
        const opinion = retrieveRandomOpinion();
        const generatedReaction = opinion.string + " " + opinion.emoji;

        // Choose the API to use

        if (Math.round(Math.random()) == 0) {

          retrieveGifUrlForString(opinion.emoji).then((url) => {
            // TODO: Pass in the current latitude/longitude.
            retrieveRandomCrimeStatistic('51.4256730', '-0.5630630').then((crimeStatistic) => {
                console.log(crimeStatistic);
                this.setState({
                    tweet: {
                        reaction: generatedReaction,
                        gif: url,
                        crimeStat: crimeStatistic,
                        content: crimeStatistic + " " + generatedReaction,
                    },
                });
            });
          });
        } else {
          retrieveGifUrlForString("trump").then((url) => {
            retrieveRandomTrumpQuote().then((trumpQuote) => {
                console.log(trumpQuote);
                this.setState({
                    tweet: {
                        reaction: generatedReaction,
                        gif: url,
                        crimeStat: trumpQuote,
                        content: trumpQuote + " " + generatedReaction,
                    },
                });
            });
          })
        }
    }

    render() {
        return (


            <View style={styles.container}>

                <Header
                    style={styles.flexCenter}
                    leftComponent={{icon: 'menu', color: '#fff'}}
                    centerComponent={{text: 'TWEETOPHILE', style: {color: '#fff'}}}
                    rightComponent={{icon: 'home', color: '#fff'}}
                    backgroundColor={"#E91E63"}
                />

                <Text h3 style={styles.white}>Your tweet is ready!</Text>
                <Card


                    image={{uri: this.state.tweet.gif}}>

                    <Text style={{marginBottom: 10}}>
                        {this.state.tweet.content}
                    </Text>
                    <Button
                        icon={{name: "refresh", type: "material-icons"}}
                        rounded
                        title="Refresh"
                        backgroundColor="#E91E63"
                        onPress={this.handleRefreshTweet}
                    />
                    <Button
                        backgroundColor={twitterBlue}
                        rounded title="Tweet this!"
                    />
                </Card>


            </View>
        );
    }
}

const twitterBlue = '#00aced';

const styles = StyleSheet.create({
    white: {
        color: "#FFFFFF",
    },
    container: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
    }
});

export default TweetScreen;
