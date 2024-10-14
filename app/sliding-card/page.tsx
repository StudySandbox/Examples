import { HeadphonesIcon, MoveRightIcon, TrophyIcon } from "lucide-react";

const SlidingCardPage = () => {
  return (
    /* <!-- component --> */
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#f2e8cf]">
      <div className="relative mx-auto">
        <div className="group relative flex cursor-pointer after:shadow-lg after:shadow-black">
          {/* <!-- hidden slide --> */}
          <div className="relative -left-16 top-0 z-10 w-96 rounded-xl bg-[#3d348b] px-5 py-3 text-base font-semibold leading-7 transition-all duration-700 group-hover:-left-14">
            <div className="flex flex-col gap-4">
              {/* <!-- item 1 --> */}
              <div className="flex items-center gap-2">
                <TrophyIcon className="size-5 text-white" />
                <div className="flex items-center gap-1 rounded-full bg-green-400/45 py-0.5 pl-1 pr-2">
                  <p className="-rotate-90 leading-tight text-green-500">
                    &rarr;
                  </p>
                  <p className="text-xs leading-tight text-white">10%</p>
                </div>
                <p className="text-white opacity-0 delay-200 duration-700 ease-in-out group-hover:opacity-100">
                  1,300 Goals
                </p>
              </div>
              {/* <!-- item 2 --> */}
              <div className="flex items-center gap-2">
                <HeadphonesIcon className="size-5 text-white" />
                <div className="flex items-center gap-1 rounded-full bg-green-400/45 py-0.5 pl-1 pr-2">
                  <p className="-rotate-90 leading-tight text-green-500">
                    &rarr;
                  </p>
                  <p className="text-xs leading-tight text-white">30%</p>
                </div>
                <p className="text-white opacity-0 delay-200 duration-700 ease-in-out group-hover:opacity-100">
                  30 Records
                </p>
              </div>
              <p className="py-1 text-sky-500 hover:text-sky-600">
                <MoveRightIcon className="size-4" />
              </p>
            </div>
          </div>
          {/* <!-- main --> */}
          <div className="absolute -right-16 top-0 z-20 flex w-96 flex-col gap-4 self-end rounded-xl rounded-l-2xl border-none bg-[#7678ed] px-5 py-3 text-base font-semibold leading-7 transition-all duration-700 group-hover:-right-14 group-hover:w-64 group-hover:rounded-l-lg">
            <p className="text-[#fff]">Achivements unlocked</p>
            <p className="text-[#fff]">Records sold</p>
            <p>
              <a href="https://tailwindcss.com/docs" className="text-white/50">
                Learn more &rarr;
              </a>
            </p>
          </div>
          <div className="absolute -left-10 bottom-0 h-16 w-[28rem] bg-[#3d348b] shadow-2xl shadow-[#3d348b]"></div>
        </div>
      </div>
    </div>
  );
};

export default SlidingCardPage;
