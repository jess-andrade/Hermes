import Card from "./Card";

export type Tweets = {
  tweet_types: {
    figurative?: string[];
    regular?: string[];
    irony?: string[];
    sarcasm?: string[];
  };
};

export type TweetsPageProps = {
  tweets: Tweets;
};

export default function TweetsPage({ tweets }: TweetsPageProps) {
  return (
    <div className={`p-10 flex items-center flex-col w-full gap-y-4  `}>
      {tweets.tweet_types.regular
        ? tweets.tweet_types.regular.map((tweet, index) => (
          <h1 key={index}>{tweet}</h1>
        ))
        : "Sem tweets"}
    </div>
  );
}
