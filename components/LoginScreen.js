import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, Button} from 'react-native-elements';

class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.flexCenter}>
                <Text h4>Welcome to Tweetophile</Text>
                <Button icon={{name: 'twitter', type: 'font-awesome'}} rounded backgroundColor={twitterBlue} title="Log in with Twitter" />
            </View>
        );
    }
}

const twitterBlue = '#00aced';

const styles = StyleSheet.create({
    flexCenter: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default LoginScreen;