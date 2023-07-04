import listTweets from "@/utils/listTweets";
import Card from "./Card";
import CardTweet from "./CardTweet";

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
  nextPage: number | undefined;
  currentPage: number;
};

export default function Home({ trends, nextPage, currentPage }: HomeProps) {
  return (
    <div className={`p-10 flex items-center flex-col w-full gap-y-4  `}>
      {trends.map((trend, index) => (
        <Card
          key={index}
          feeling={trend.negative_count > trend.positive_count ? "bad" : "good"}
          title={trend.trend}
          description={trend.trend}
          tweets={listTweets({ tweet_types: trend.tweet_types })}
        />
      ))}
      {currentPage == 1 ? false : <h1>Previous Page: {currentPage - 1}</h1>}
      {nextPage ? (
        <h1>
          Next Page: {currentPage + 1} - Link: {nextPage}
        </h1>
      ) : (
        false
      )}
    </div>
  );
}
