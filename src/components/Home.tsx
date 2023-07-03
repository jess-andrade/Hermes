import Card from "./Card";
import CardTweet from './CardTweet';

export type TrendInfo = {
  negative_count: number;
  positive_count: number;
  trend: string;
  tweet_types: {
    figurative?: string[];
    regular?: string[];
    irony?: string[];
    sarcasm?: string[];
  };
};

export type HomeProps = {
  trends: TrendInfo[];
};

export default function Home({ trends }: HomeProps) {
  return (
    <div className={`p-10 flex items-center flex-col w-full gap-y-4  `}>
      {trends.map((trend, index) => (
        <Card
          key={index}
          feeling={trend.negative_count > trend.positive_count ? "bad" : "good"}
          title={trend.trend}
          description={trend.trend}
        />
      ))}
      <CardTweet feeling='regular' description='card' />
    </div>
  );
}
