import Home, { HomeProps } from "@/components/Home";
import Layout from "@/components/Layout";

export async function getServerSideProps() {
  const res = await fetch(`http://hermesproject.pythonanywhere.com/trends`, {
    headers: new Headers({ "X-API-Key": "Q%o4V#h6Rt@1m5Z&9aG" }),
  });
  const data = await res.json();

  return {
    props: {
      trends: data.results,
    },
  };
}

export default function Index({ trends }: HomeProps) {
  return (
    <>
      <Layout>
        <Home trends={trends} />
      </Layout>
    </>
  );
}
