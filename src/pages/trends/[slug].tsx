import Layout from "@/components/Layout";
import TweetsPage, { TweetsPageProps } from "@/components/TweetsPage";
import { useTrendContext } from "@/context/trendContext";

export default function TrendPage() {
  const { tweets } = useTrendContext();

  return (
    <>
      <Layout>
        <TweetsPage tweets={tweets} />
      </Layout>
    </>
  );
}
