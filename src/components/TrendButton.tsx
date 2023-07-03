import Image from "next/image";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import { useRouter } from 'next/router'

export default function () {
  const router = useRouter()

  const handleClick = () => {
    router.push('/')
  }
  return (
    <div
      className={`p-4 flex items-center flex-nowrap cursor-pointer space-x-8 w-3/4 h-16 rounded-lg border-b-4 border-indigo-950 bg-[#1d267d]`}
      onClick={handleClick}
    >
      <div className={`flex flex-row gap-x-10 m-4`}>
        {/* name and description */}
        <div
          className={`flex flex-row gap-8 flex-wrap justify-center items-center`}
        >
          <ExitToAppIcon color="primary" />
          <h1 className={`text-x0.5 font-bold uppercase text-white`}>
            Trend Topics
          </h1>
        </div>
      </div>
    </div>
  );
}
