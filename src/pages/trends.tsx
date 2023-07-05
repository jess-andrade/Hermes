import Home, { HomeProps } from "@/components/Home";
import Layout from "@/components/Layout";
import { useTrendContext } from "@/context/trendContext";

export async function getServerSideProps({ query }: any) {
  const page = query.page ?? 1;

  console.log(page);

  const res = await fetch(
    `http://hermesproject.pythonanywhere.com/trends?page=${page}`,
    {
      headers: new Headers({ "X-API-Key": "Q%o4V#h6Rt@1m5Z&9aG" }),
    }
  );
  const data = await res.json();

  return {
    props: {
      trends: data.results,
      nextPage: data.next_page,
      currentPage: data.current_page,
    },
  };
}

export default function Index({ trends, currentPage, nextPage }: HomeProps) {
  return (
    <>
      <Layout>
        <Home trends={trends} currentPage={currentPage} nextPage={nextPage} />
      </Layout>
    </>
  );
}
