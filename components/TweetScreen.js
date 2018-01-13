import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Card, Text} from 'react-native-elements';

class TweetScreen extends Component {
    render() {
        return (
            <View style={styles.flexCenter}>
                <Text h3 style={styles.white}>Your tweet is ready!</Text>
                <Card
                    image={{uri: 'https://media.giphy.com/media/l44Q7lmy0QVQVbIm4/giphy.gif'}}>
                    <Text style={{marginBottom: 10}}>
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                    <Button
                        style={{display:"block", marginBottom:10}}
                        icon={{name: "refresh", type: "material-icons"}}
                        rounded
                        title="Refresh"
                        backgroundColor="#E91E63"
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
    },
    white : {
        color: "#FFFFFF",
    },
});

export default TweetScreen;