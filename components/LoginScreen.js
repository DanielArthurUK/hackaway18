import React, {Component} from 'react';
import {StyleSheet, View, Image } from 'react-native';
import {Text, Button} from 'react-native-elements';
import twitter, {auth} from 'react-native-twitter';

const consumerKey = "yXXNSwhnphe4uXwxz7EDR50bq";
const consumerSecret = "xZkQcqWEUFBmzIkz5uESb6AK6Ix6ZzDLozU36jvEK6OIaRbn0F";

class LoginScreen extends Component {

    handleTwitterLogin = () => {
        auth({
            "consumerKey" : consumerKey,
            "consumerSecret" : consumerSecret
        }, "tauth://components/LoginScreen").then(({accessToken, accessTokenSecret, id, name}) => {
            this.state = {
                oauth: {
                    'consumerKey': consumerKey,
                    'consumerSecret': consumerSecret,
                    'accessToken': accessToken,
                    'accessTokenSecret': accessTokenSecret
                }
            }
            this.proceedToTweetScreen();
        });
    }

    proceedToTweetScreen = () => {
        this.props.navigation.navigate(
            'TweetScreen',
            {oath: this.state.oauth}
        );
    }

    render() {
        return (
            <View style={styles.flexCenter}>
                <Image
                  style={{height: 300, width: 300}}
                  source = {require('../artwork/icon.png')}
                  resizeMode = 'contain'
                />
                <Text style={{color: 'white', fontSize: 40}}>
                    Welcome to
                </Text>
                <Text style={{color: 'white', fontSize: 70}}>
                    Tweetophile
                </Text>

                <Button
                    icon={{name: 'twitter', type: 'font-awesome'}}
                    rounded
                    backgroundColor={twitterBlue}
                    title="Log in with Twitter"
                    onPress={this.handleTwitterLogin}/>
            </View>
        );
    }
}

const twitterBlue = '#00aced';

const styles = StyleSheet.create({
    flexCenter: {
        flex: 1,
        backgroundColor: '#0084b4',
        alignItems: 'center',
        justifyContent: 'center',

    }
});

export default LoginScreen;
