import { UpvoteI, MessageI, RepostI, MenuI } from "@/utils/Icons";

export default function Home() {
  return (
    <div className="w-full h-full pb-20 pt-14">
      {/* article */}
      <div className="p-4 md:p-6 lg:px-6 border-b border-primaryBorder cursor-pointer">
        <div>
          <div className="flex items-center justify-between">
          {/* create profilePicture component for this */}
          <div className="flex gap-2">
            <img className="w-10 h-10 rounded-full" src="https://avatars.githubusercontent.com/u/75791209?v=4" />
            <div className="flex flex-col">
              <h3 className="text-sm font-medium capitalize hover:underline transition">Ruchiket100</h3>
              <span className="text-slate-500 text-xs">• 28m</span>
            </div>
          </div>
          <MenuI/>
          </div>
          {/* content */}
          <div className="mt-4 pl-12">
            <div className="font-normal break-words mb-2  text-sm">This is the first project</div>
          </div>
          {/* action buttons */}
          <div className="w-full mt-4 pl-12">
            <div className="flex items-center gap-6">
              <button className="relative flex items-center text-xs pr-8 group">
                <span className="flex items-center justify-center rounded-full group-hover:bg-green-200 hover:text-green-600 -ml-2 h-8 w-8">
                  <UpvoteI className="transition-transform transform group-hover:-translate-y-0.5" />
                </span>
                <span className="absolute left-6 px-1 text-slate-800 text-xs">0</span>
              </button>
              <button className="relative flex items-center text-xs pr-8 group">
                <span className="flex items-center justify-center rounded-full group-hover:bg-blue-200 hover:text-blue-600 -ml-2 h-8 w-8">
                  <MessageI className="transition-transform transform group-hover:-translate-y-0.5" />
                </span>
                <span className="absolute left-6 px-1 text-slate-800 text-xs">0</span>
              </button>
              <button className="relative flex items-center text-xs pr-8 group">
                <span className="flex items-center justify-center rounded-full group-hover:bg-yellow-200 hover:text-yellow-600 -ml-2 h-8 w-8">
                  <RepostI className="transition-transform transform group-hover:rotate-[30deg]" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
