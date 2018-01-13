import { Text, View } from 'react-native';

// RANDOM OPINION

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
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

export function retrieveRandomOpinion() {
    const index = getRandomInt(0, opinions.length - 1);
    return opinions[index];
}

// GIPHY FETCHER

const giphyApiKey = '0Jk0mubrPRIhTRQ3nkrM2SkCtwTZ4tbP';

// Number of top results that should be randomly selected from.
const limit = 5;

export async function retrieveGifUrlForString(string) {
    try {
        const response = await fetch(
            'https://api.giphy.com/v1/gifs/search?api_key=' + giphyApiKey + '&q=' + string + '&limit=' + limit + '&offset=0&rating=R&lang=en'
        );
        const responseJson = await response.json();
        const index = getRandomInt(0, limit - 1);

        return responseJson.data[index].images.downsized_large.url;
    } catch (error) {
        console.error(error);
    }
}
