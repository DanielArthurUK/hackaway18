
/*
 ██████  ██████  ██ ███    ██ ██  ██████  ███    ██     ███████ ████████ ██████  ██ ███    ██  ██████
██    ██ ██   ██ ██ ████   ██ ██ ██    ██ ████   ██     ██         ██    ██   ██ ██ ████   ██ ██
██    ██ ██████  ██ ██ ██  ██ ██ ██    ██ ██ ██  ██     ███████    ██    ██████  ██ ██ ██  ██ ██   ███
██    ██ ██      ██ ██  ██ ██ ██ ██    ██ ██  ██ ██          ██    ██    ██   ██ ██ ██  ██ ██ ██    ██
 ██████  ██      ██ ██   ████ ██  ██████  ██   ████     ███████    ██    ██   ██ ██ ██   ████  ██████
*/

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
    { string: "That was the smartest thing you've said in a while^", emoji : "👏"},
    { string: "I was hoping that would be the case", emoji : "🎉" }
];

export function retrieveRandomOpinion() {
    const index = getRandomInt(0, opinions.length - 1);
    return opinions[index];
}

/*
 ██████  ██ ██████  ██   ██ ██    ██     ███████ ███████ ████████  ██████ ██   ██ ███████ ██████
██       ██ ██   ██ ██   ██  ██  ██      ██      ██         ██    ██      ██   ██ ██      ██   ██
██   ███ ██ ██████  ███████   ████       █████   █████      ██    ██      ███████ █████   ██████
██    ██ ██ ██      ██   ██    ██        ██      ██         ██    ██      ██   ██ ██      ██   ██
 ██████  ██ ██      ██   ██    ██        ██      ███████    ██     ██████ ██   ██ ███████ ██   ██
*/

const giphyApiKey = '0Jk0mubrPRIhTRQ3nkrM2SkCtwTZ4tbP';

// Number of top results that should be randomly selected from.
const limit = 15;

export async function retrieveGifUrlForString(string) {
    try {
        const response = await fetch(
            'https://api.giphy.com/v1/gifs/search?api_key=' + giphyApiKey + '&q=' + string + '&limit=' + limit + '&offset=0&rating=R&lang=en'
        );
        const responseJson = await response.json();
        const index = getRandomInt(0, limit - 1);

        return responseJson.data[index].images.original.url;
    } catch (error) {
        console.error(error);
    }
}

/*
 ██████ ██████  ██ ███    ███ ███████     ███████ ████████  █████  ████████ ██ ███████ ████████ ██  ██████ ███████
██      ██   ██ ██ ████  ████ ██          ██         ██    ██   ██    ██    ██ ██         ██    ██ ██      ██
██      ██████  ██ ██ ████ ██ █████       ███████    ██    ███████    ██    ██ ███████    ██    ██ ██      ███████
██      ██   ██ ██ ██  ██  ██ ██               ██    ██    ██   ██    ██    ██      ██    ██    ██ ██           ██
 ██████ ██   ██ ██ ██      ██ ███████     ███████    ██    ██   ██    ██    ██ ███████    ██    ██  ██████ ███████
*/

function crimeNameFromCategory(category) {
    switch (category) {
    case "criminal-damage-arson":
        return "criminal damage & arson";
    case "possession-of-weapons":
        return "possession of weapons";
    case "violent-crime":
        return "violence and sexual offences";
    default:
        return undefined;
    }
}

export async function retrieveRandomCrimeStatistic(latitude, longitude) {
    try {
        const response = await fetch(
            'https://data.police.uk/api/crimes-street/all-crime?lat=' + latitude + '&lng=' + longitude
        );
        const responseJson = await response.json();

        let crimeStatistic = undefined;

        let crimeStatistics = {
            "criminal damage & arson" : 0,
            "possession of weapons" : 0,
            "violence and sexual offences" : 0
        }

        for (var i = 0; i < responseJson.length; i++) {
            const crime = responseJson[i];
            const crimeName = crimeNameFromCategory(crime.category);

            // Only sum this if it's a 'violent' crime.
            if (typeof crimeName != 'undefined') {
                crimeStatistics[crimeName] += 1;
            }
        }

        const crimeNames = Object.keys(crimeStatistics);

        const index = getRandomInt(0, crimeNames.length - 1);
        const crime = crimeNames[index];

        if (crimeStatistics[crime] == 1){
            return "There was " + crimeStatistics[crime] + " instance of " + crime + " here last month."
        } else {
            return "There were " + crimeStatistics[crime] + " instances of " + crime + " here last month."
        }


    } catch (error) {
        console.error(error);
    }
}
