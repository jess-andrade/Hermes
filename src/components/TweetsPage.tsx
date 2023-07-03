// export type Tweets = {
//   tweet_types: {
//     figurative?: string[];
//     regular?: string[];
//     irony?: string[];
//     sarcasm?: string[];
//   };
// };

import CardTweet from './CardTweet';

export type Tweet = {
  text: string;
  feeling: 'figurative' | 'regular' | 'sarcasm' | 'irony';
};

export type TweetsPageProps = {
  tweets: Tweet[];
};

export default function TweetsPage({ tweets }: TweetsPageProps) {
  return (
    <div className={`p-10 flex items-center flex-col w-full gap-y-4  `}>
      {tweets.map((tweet, index) => (
        <CardTweet key={index} feeling={tweet.feeling} description={tweet.text} />

      ))}
    </div>
  );
}
