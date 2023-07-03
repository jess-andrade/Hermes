
export default function () {
  return (
    <div
      className={`p-4 flex items-center flex-nowrap cursor-pointer space-x-8 w-full min-h-[6vh] border-b-8 border-indigo-950 bg-[#1d267d]`}>

      <div className={`flex flex-row gap-x-10 m-4`}>

        {/* name and description */}
        <div className={`flex flex-col flex-wrap justify-center items-center`}>
          <h1 className={`text-2xl font-bold uppercase text-white`}>Trend Topics</h1>
        </div>
      </div>
    </div>
  );
}