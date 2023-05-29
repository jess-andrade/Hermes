import { Avatar } from "@mui/material"

import Image from 'next/image'
import happy from '../../public/happy.png'

export default function TrendCard() {
  return (
    <div
      className={`p-4 flex items-center flex-nowrap cursor-pointer space-x-8 min-w-full min-h-[20vh] rounded-xl border-b-4 border-r-2 border-green-900 bg-gradient-to-r from-emerald-400 to-green-500 hover:from-lime-500 hover:to-green-600 ...`}
    >
      <div className={` ml-8`}>
        <Image src={happy} className={`w-[100px]`} alt='test'></Image>
      </div>
      <div className={`flex flex-row gap-x-10 m-4`}>

        {/* name and description */}
        <div className={`flex flex-col flex-wrap`}>
          <h1 className={`text-2xl font-bold uppercase`}>Titulo</h1>
          <div className={`py-2 max-w-2xl flex-wrap text-slate-400 text-sm text-justify`}>
            <p>descrição</p>
          </div>

        </div>
      </div>
    </div>
  );
}
