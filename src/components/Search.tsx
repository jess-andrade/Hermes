import Fields from './TrendButton';

import Image from 'next/image'
import hermes from '../../public/hermes.png'
import TrendButton from './TrendButton';

export default function Search() {
  return (
    <>
      <div className={`flex flex-col w-full rounded-xl`}>
        <div className={` flex-col flex gap-8 w-full justify-center items-center`}>
          <TrendButton />
        </div>
      </div>
    </>
  )
}