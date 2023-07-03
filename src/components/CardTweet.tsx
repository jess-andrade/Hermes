import Image from 'next/image'

import bad from '../../public/bad4.png'
import good from '../../public/good4.png'

import TwitterIcon from '@mui/icons-material/Twitter';

type CardTypeProps = {
  feeling: 'figurative' | 'regular' | 'sarcasm' | 'irony',
  description: string
}

const feelingProps = {
  'regular': 'border-red-600 bg-gradient-to-r from-orange-400 to-red-600 hover:from-orange-500 hover:to-red-700',
  'figurative': 'border-green-900 bg-gradient-to-r from-emerald-400 to-green-500 hover:from-lime-500 hover:to-green-600',
  'sarcasm': 'border-red-600 bg-gradient-to-r from-orange-400 to-red-600 hover:from-orange-500 hover:to-red-700',
  'irony': 'border-green-900 bg-gradient-to-r from-emerald-400 to-green-500 hover:from-lime-500 hover:to-green-600',
}

export default function ({ feeling, description }: CardTypeProps) {
  return (
    <div
      className={`p-4 flex items-center flex-nowrap space-x-8 min-w-full min-h-[4vh] rounded-xl border-b-4 border-r-2 ${feelingProps[feeling]}`}>

      <div className={` p-4 flex flex-row gap-2`}>
        <TwitterIcon fontSize='large' color='primary' />
        {/* <Image src={ } className={`w-[40px]`} alt='feeling' /> */}
      </div>

      <div className={`flex flex-row gap-x-10 m-4`}>

        {/* name and description */}
        <div className={`flex flex-col flex-wrap`}>
          <div className={`py-2 max-w-2xl flex-wrap text-white text-base text-justify `}>
            <p>description</p>
          </div>

        </div>
      </div>
    </div>
  );
}