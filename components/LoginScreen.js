import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Text, Button} from 'react-native-elements';

class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.flexCenter}>
                <Image
                  style={{height: 300, width: 300}}
                  source = {require('../icon.png')}
                  resizeMode = 'contain'
                />
                <Text style={{color: 'white', fontSize: 40}}>
                    Welcome to
                </Text>
                <Text style={{color: 'white', fontSize: 70}}>
                    Tweetophile
                </Text>
                <Button icon={{name: 'twitter', type: 'font-awesome'}} rounded backgroundColor={twitterBlue} title="Log in with Twitter" />
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
