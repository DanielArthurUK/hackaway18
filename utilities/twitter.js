

import twitter, {auth} from 'react-native-twitter';

_postToTwitter = () => {
  auth({
          consumerKey:       'yXXNSwhnphe4uXwxz7EDR50bq',
          consumerSecret:    'xZkQcqWEUFBmzIkz5uESb6AK6Ix6ZzDLozU36jvEK6OIaRbn0F',
        //  accessToken:       '716332538-Yxh0TeMJnEbhbxfuaBBoQheZh29FOT1D21aQpe6q',
        //  accessTokenSecret: 'wObTovEnts2w4jWDRrtB9y7mfNWPqAgzqAOYKqUpH5Ea8',
      })
  const tokens = {
    consumerKey:       'yXXNSwhnphe4uXwxz7EDR50bq',
    consumerSecret:    'xZkQcqWEUFBmzIkz5uESb6AK6Ix6ZzDLozU36jvEK6OIaRbn0F',
    accessToken:       '716332538-Yxh0TeMJnEbhbxfuaBBoQheZh29FOT1D21aQpe6q',
    accessTokenSecret: 'wObTovEnts2w4jWDRrtB9y7mfNWPqAgzqAOYKqUpH5Ea8',
  }

  const {rest, stream} = twitter(tokens);

  const message = "Hello World";

  rest.post('post/statuses/update', {message});

}
