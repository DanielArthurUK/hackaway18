import React, {Component} from 'react';
import {StyleSheet, View, Platform, Linking} from 'react-native';
import {Button, FormLabel, FormInput, FormValidationMessage} from 'react-native-elements';
import twitter, {auth} from 'react-native-twitter';

class AuthorizeScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            // oauth: {
            //     token: this.props.navigation.state.params.oauth.token,
            //     tokenSecret: this.props.navigation.state.params.oauth.tokenSecret,
            // }
        }
    }

    componentDidMount() {
        if (Platform.OS === 'android') {
            Linking.getInitialURL().then(url => {
                // This doesn't yet work
            });
        } else {
            Linking.addEventListener('url', this.handleIosOpenURL);
        }

        auth({
            "consumerKey" : "yXXNSwhnphe4uXwxz7EDR50bq",
            "consumerSecret" : "xZkQcqWEUFBmzIkz5uESb6AK6Ix6ZzDLozU36jvEK6OIaRbn0F"
        }, "tauth://components/AuthorizeScreen").then(({accessToken, accessTokenSecret, id, name}) => {
            this.state = {
                oauth: {
                    token: accessToken,
                    tokenSecret: accessTokenSecret
                }
            }
            this.proceedToTweetScreen();
        });
    }

    componentWillUnmount() {
        Linking.removeEventListener('url', this.handleIosOpenURL);
    }

    handleIosOpenURL = (event) => {

    }

    proceedToTweetScreen = () => {
        this.props.navigation.navigate(
            'TweetScreen',
            {oath: this.state.oauth}
        );
    }

    handleKeyPress = (evt) => {
        this.setState({
            accessCode: evt,
        });
    }

    render() {
        return (
            <View>
                <FormLabel>Twitter Pin Code</FormLabel>
                <FormInput value={this.state.accessCode} onChangeText={this.handleKeyPress} />
                <FormValidationMessage>You need to fill in this information from Twitter</FormValidationMessage>
                <Button onPress={this.handleAccessCode} rounded backgroundColor="#FF00FF" title="Enter" />
            </View>
        );
    }
}

const styles = StyleSheet.create({

});

export default AuthorizeScreen;
