type RawTweets = {
  tweet_types: {
    figurative?: string[];
    regular?: string[];
    irony?: string[];
    sarcasm?: string[];
  };
};

type Tweet = {
  text: string;
  feeling: string;
};

function shuffle(array: Tweet[]) {
  var m = array.length,
    t,
    i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

const listTweets = (rawTweets: RawTweets) => {
  let tweets: Tweet[] = [];

  const pushTweets = (tweetTexts: string[], feeling: string) => {
    for (let text of tweetTexts) {
      tweets.push({ text, feeling });
    }
  };

  rawTweets.tweet_types.figurative
    ? pushTweets(rawTweets.tweet_types.figurative, "figurative")
    : null;

  rawTweets.tweet_types.sarcasm
    ? pushTweets(rawTweets.tweet_types.sarcasm, "sarcasm")
    : null;

  rawTweets.tweet_types.irony
    ? pushTweets(rawTweets.tweet_types.irony, "irony")
    : null;

  rawTweets.tweet_types.regular
    ? pushTweets(rawTweets.tweet_types.regular, "regular")
    : null;

  return shuffle(tweets);
};

export default listTweets;
