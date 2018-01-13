import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, FormLabel, FormInput, FormValidationMessage} from 'react-native-elements';

class AuthorizeScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            accessCode: "",
        }
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
                <Button rounded backgroundColor="#FF00FF" title="Enter" />
            </View>
        );
    }
}

const styles = StyleSheet.create({

});

export default AuthorizeScreen;