import { Tweet } from "@/components/TweetsPage";
import { createContext, useContext } from "react";

export type TrendContextProps = {
  tweets: Tweet[];
  setTweets: (tweets: Tweet[]) => void;
};

export const TrendContext = createContext<TrendContextProps>({
  tweets: [],
  setTweets: () => {},
});

export const useTrendContext = () => useContext(TrendContext);
