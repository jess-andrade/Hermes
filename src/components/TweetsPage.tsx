// export type Tweets = {
//   tweet_types: {
//     figurative?: string[];
//     regular?: string[];
//     irony?: string[];
//     sarcasm?: string[];
//   };
// };

export type Tweet = {
  text: string;
  feeling: string;
};

export type TweetsPageProps = {
  tweets: Tweet[];
};

export default function TweetsPage({ tweets }: TweetsPageProps) {
  return (
    <div className={`p-10 flex items-center flex-col w-full gap-y-4  `}>
      {tweets.map((tweet, index) => (
        <h1 key={index}>
          {tweet.text} / {tweet.feeling}
        </h1>
      ))}
    </div>
  );
}
