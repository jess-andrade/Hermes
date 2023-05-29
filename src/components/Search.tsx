import Fields from './Fields';

import Image from 'next/image'
import bad from '../../public/bad.png'
import hermes from '../../public/hermes.png'

export default function Search() {
  return (
    <>
      <div className={`flex flex-col w-full rounded-xl`}>
        <div className={` flex-col flex w-full justify-center`}>
          <Fields />
        </div>
      </div>
    </>
  )
}