import Image from 'next/image'

import bad from '../../public/bad4.png'
import good from '../../public/good4.png'

import TwitterIcon from '@mui/icons-material/Twitter';

type CardTypeProps = {
  feeling: 'figurative' | 'regular' | 'sarcasm' | 'irony',
  description: string
}

const feelingProps = {
  'regular': 'border-teal-600 bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-500 hover:to-teal-500',
  'figurative': 'border-purple-900 bg-gradient-to-r from-violet-400 to-purple-500 hover:from-violet-500 hover:to-purple-600',
  'sarcasm': 'border-rose-600 bg-gradient-to-r from-pink-400 to-rose-600 hover:from-pink-500 hover:to-rose-700',
  'irony': 'border-red-600 bg-gradient-to-r from-orange-400 to-red-600 hover:from-orange-500 hover:to-red-700',
}

export default function CardTweet({ feeling, description }: CardTypeProps) {
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
            <p>{description}</p>
          </div>
          <div className={`py-2 max-w-2xl flex-wrap text-white text-sm text-justify capitalize `}>
            <p>» {feeling} «</p>
          </div>

        </div>
      </div>
    </div>
  );
}