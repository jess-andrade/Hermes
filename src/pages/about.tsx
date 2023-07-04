import Layout from "@/components/Layout";
import TweetsPage, { TweetsPageProps } from "@/components/TweetsPage";
import listTweets from "@/utils/listTweets";

type AboutPageProps = {
  about: string
}

export async function getStaticProps() {

  const res = await fetch("http://hermesproject.pythonanywhere.com/", {
    headers: new Headers({
      "X-API-Key": "Q%o4V#h6Rt@1m5Z&9aG",
    }),
  });

  const data = await res.json();
  return { props: { about: data.description } };
}

export default function About({ about }: AboutPageProps) {
  return (
    <>
      <Layout>
        {about}
      </Layout>
    </>
  );
}

