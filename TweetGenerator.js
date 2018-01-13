import React, { Component } from 'react';
import { Text, View } from 'react-native';

// RANDOM OPINION

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const opinions = [
    { string: "Woohoo! That's great", emoji : "😃" },
    { string: "Ah fuck, that's shit", emoji : "💩" },
    { string: "Oh no! That's terrible", emoji : "😫" },
    { string: "Whoop-di-fucking-do", emoji : "🙄" },
    { string: "Do you think that deserves a medal?", emoji : "🤦‍" },
    { string: "Smartest thing you've said in a while^", emoji : "👏" }
];

function retrieveRandomOpinion() {
    const index = getRandomInt(0, opinions.length - 1);
    return opinions[index];
}

// GIPHY FETCHER

const giphyApiKey = '0Jk0mubrPRIhTRQ3nkrM2SkCtwTZ4tbP';

// Number of top results that should be randomly selected from.
const limit = 5;

async function retrieveGifUrlForString(string) {
    try {
        let response = await fetch(
            'https://api.giphy.com/v1/gifs/search?api_key=' + giphyApiKey + '&q=' + string + '&limit=' + limit + '&offset=0&rating=R&lang=en'
        );
        let responseJson = await response.json();
        const index = getRandomInt(0, limit - 1);
        return responseJson.data[index].embed_url;
    } catch (error) {
        console.error(error);
    }
}

// TWEET GENERATION

export default class TweetGenerator extends Component {
    render() {
        var opinion = retrieveRandomOpinion();
        console.log(opinion.string + " " + opinion.emoji);

        retrieveGifUrlForString(opinion.emoji).then(function (url) {
            console.log(url);
        });

        return (
            <View style={{flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: 'white'}}>
                <Text style={{fontWeight: "500", textAlign: "left", color: "darkgray"}}>
                    {opinion.string + " " + opinion.emoji}
                </Text>
            </View>
        );
    }
}
