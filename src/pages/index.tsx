import Image from 'next/image'
import { Inter } from 'next/font/google'
import Home from "@/components/Home";
import Layout from '@/components/Layout';
import Search from '@/components/Search';
import Layout2 from '@/components/Layout2';

const inter = Inter({ subsets: ['latin'] })

export default function Index() {
  return (
    <>
      <Layout>
        <Layout2 />
      </Layout>
    </>
  )
}
