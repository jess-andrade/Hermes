import Fields from './TrendButton';

import Image from 'next/image'
import hermes from '../../public/hermes.png'
import TrendButton from './TrendButton';
import SearchBar from "./SearchBar";

export default function Search() {
  return (
    <>
      <div className={`pl-14 flex flex-col w-full rounded-xl`}>
        <div className={` flex-col flex gap-8 w-full justify-start items-start`}>
          <TrendButton />
          <SearchBar />
        </div>
      </div>
    </>
  );
}
