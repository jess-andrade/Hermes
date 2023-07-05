import Home, { HomeProps } from "@/components/Home";
import Layout from "@/components/Layout";
const dotenv = require("dotenv");
dotenv.config();

export async function getServerSideProps() {
  const res = await fetch(`http://hermesproject.pythonanywhere.com/trends`, {
    headers: new Headers({ "X-API-Key": `${process.env.API_KEY}` }),
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
