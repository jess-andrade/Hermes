import { Avatar } from "@mui/material"

import Image from 'next/image'
import bad from '../../public/bad4.png'

export default function TrendCard() {
  return (

    <div
      className={`p-4 flex items-center flex-nowrap cursor-pointer space-x-8 min-w-full min-h-[20vh] rounded-xl border-b-4 border-r-2 border-red-600 bg-gradient-to-r from-orange-400 to-red-600 hover:from-orange-500 hover:to-red-700 ...`}>

      <div className={` ml-8`}>
        <Image src={bad} className={`w-[100px]`} alt='test'></Image>
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
