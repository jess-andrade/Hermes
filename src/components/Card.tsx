import Image from "next/image";

import bad from "../../public/bad4.png";
import good from "../../public/good4.png";
import { useRouter } from "next/router";
import { useTrendContext } from "@/context/trendContext";
import { Tweet } from "./TweetsPage";

type CardTypeProps = {
  title: string;
  feeling: "bad" | "good";
  description: string;
  tweets: Tweet[];
};
export default function Card({
  feeling,
  description,
  title,
  tweets,
}: CardTypeProps) {
  const router = useRouter();
  const { setTweets } = useTrendContext();

  const handleClick = ({}) => {
    setTweets(tweets);
    router.push({ pathname: `/trend/${title}` });
  };

  const handleNextPage = () => {};

  const handlePreviousPage = () => {};

  return (
    <div
      className={`p-4 flex items-center flex-nowrap cursor-pointer space-x-8 min-w-full min-h-[20vh] rounded-xl border-b-4 border-r-2 ${
        feeling == "bad"
          ? "border-red-600 bg-gradient-to-r from-orange-400 to-red-600 hover:from-orange-500 hover:to-red-700"
          : "border-green-900 bg-gradient-to-r from-emerald-400 to-green-500 hover:from-lime-500 hover:to-green-600"
      }`}
      onClick={handleClick}
    >
      <div className={` ml-8`}>
        <Image
          src={feeling == "bad" ? bad : good}
          className={`w-[100px]`}
          alt="feeling"
        ></Image>
      </div>

      <div className={`flex flex-row gap-x-10 m-4`}>
        {/* name and description */}
        <div className={`flex flex-col flex-wrap`}>
          <h1 className={`text-2xl font-bold uppercase`}>{title}</h1>
          <div
            className={`py-2 max-w-2xl flex-wrap text-slate-400 text-sm text-justify`}
          >
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
