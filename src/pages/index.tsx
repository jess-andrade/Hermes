import Image from 'next/image'
import { Inter } from 'next/font/google'
import Home from "@/components/Home";
import Layout from '@/components/Layout';
import Search from '@/components/Search';
import Layout2 from '@/components/Layout2';

// export async function getServerSideProps() {
//   // Fetch data from external API 
//   // const res = await fetch('http://hermesproject.pythonanywhere.com/trends', { headers: new Headers({ 'X-API-Key': 'Q%o4V#h6Rt@1m5Z&9aG' }) })
//   // const data = await res.json()

//   // Pass data to the page via props
// }

export default function Index() {
  return (
    <>
      <Layout>
        <Layout2 />
      </Layout>
    </>
  )
}
