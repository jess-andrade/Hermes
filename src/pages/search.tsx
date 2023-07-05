import Layout from "@/components/Layout";
import TweetsPage, { TweetsPageProps } from "@/components/TweetsPage";
import listTweets from "@/utils/listTweets";

export async function getServerSideProps({ query }: any) {
  // Aqui é a requisição de pesquisa já feita, meu amorzinho. //
  // Eu só substituí o const data para ficar mais rápido para testes. //

  const res = await fetch("http://hermesproject.pythonanywhere.com/search", {
    method: "POST",
    body: JSON.stringify({ keyword: query.query }),
    headers: new Headers({
      "X-API-Key": "Q%o4V#h6Rt@1m5Z&9aG",
      "Content-Type": "application/json",
    }),
  });
  const data = await res.json();

  return { props: { tweets: listTweets(data.results[0]) } };
}

export default function Index({ tweets }: TweetsPageProps) {
  return (
    <>
      <Layout>
        <TweetsPage tweets={tweets} />
      </Layout>
    </>
  );
}
