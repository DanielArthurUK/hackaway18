import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Button, Card, Header, Text} from 'react-native-elements';
import {
    retrieveGifUrlForString, retrieveRandomCrimeStatistic,
    retrieveRandomOpinion, retrieveRandomTrumpQuote
} from "../utilities/TweetGenerator";
import twitter, {auth} from 'react-native-twitter';

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
            oauth: {
                consumerKey: this.props.navigation.state.params.oath.consumerKey,
                consumerSecret: this.props.navigation.state.params.oath.consumerSecret,
                accessToken: this.props.navigation.state.params.oath.accessToken,
                accessTokenSecret: this.props.navigation.state.params.oath.accessTokenSecret
            }
        }
    }

    componentDidMount() {
        this.handleRefreshTweet();
    }

    handleSendTweet = () => {
        const {rest, stream} = twitter(this.state.oauth);

        rest.post('statuses/update', { status : this.state.tweet.fullTweet }).then((data) => {
            console.log("Done" + data);
        });
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
                        fullTweet: crimeStatistic + " " + generatedReaction + " " + url,
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
                        fullTweet: trumpQuote + " " + generatedReaction + " " + url,
                    },
                });
            });
          })
        }
    }

    render() {
        return (
            <View style={styles.container}>

                {/* <Header
                    style={styles.flexCenter}
                    barStyle="light-content"
                    translucent
                    leftComponent={{icon: 'menu', color: '#fff'}}
                    centerComponent={{text: 'TWEETOPHILE', style: {color: '#fff'}}}
                    rightComponent={{icon: 'home', color: '#fff'}}
                    backgroundColor={"#E91E63"}
                /> */}
                <Text h3 style={styles.white}>     Your tweet is ready!</Text>
                <Card>
                    <Image
                      style={{height: 340, width: 312 }}
                      source = {{uri: this.state.tweet.gif}}
                      resizeMode = 'cover'
                    />

                    <Text style={{marginBottom: 5, marginTop: 5, height: 100}}>
                        {this.state.tweet.content}
                    </Text>
                </Card>

                <Card>
                        <Button
                            style={styles.buttons}
                            icon={{name: "refresh", type: "material-icons"}}
                            rounded
                            title="Refresh"
                            backgroundColor="#E91E63"
                            onPress={this.handleRefreshTweet}
                        />
                        <Button
                            style={styles.buttons}
                            backgroundColor={twitterBlue}
                            onPress={this.handleSendTweet}
                            rounded title="Tweet this!"
                        />
                        <Button
                            style={styles.buttons}
                            rounded title="I'm feeling Tweety"
                            backgroundColor="#32CD32"
                            onPress={this.handleRefreshTweet}
                        />
                </Card>
            </View>
        );
    }
}

const twitterBlue = '#00aced';

const styles = StyleSheet.create({
    white: {
        display: 'flex',
        color: "#00aced",
        justifyContent: "center",
        flex: 1,
        flexDirection: "column",
    },
    buttonGroup: {
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
    },
    buttons: {
    },

    container: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        marginTop: 3
    }
});

export default TweetScreen;
