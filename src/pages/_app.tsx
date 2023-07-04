import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { TrendContext } from "@/context/trendContext";
import { Tweet } from "@/components/TweetsPage";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [tweets, setTweets] = useState<Tweet[]>([]);

  return (
    <TrendContext.Provider value={{ tweets, setTweets }}>
      <Component {...pageProps} />{" "}
    </TrendContext.Provider>
  );
}
