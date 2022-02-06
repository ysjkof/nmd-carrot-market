import type { NextPage } from "next";

const ChatDetail: NextPage = () => {
  return (
    <div className="space-y-4 py-10">
      <div className="flex items-start space-x-2">
        <div className="h-8 w-8 rounded-full bg-gray-400" />
        <div className="w-3/5 border  border-gray-300 p-1">
          Hi how much are you selling them for?
        </div>
      </div>
      <div className="flex flex-row-reverse items-start gap-2">
        <div className="h-8 w-8 rounded-full bg-gray-400" />
        <div className="w-3/5 border border-gray-300 p-1">I want ￦20,000</div>
      </div>
      <div className="flex items-start space-x-2">
        <div className="h-8 w-8 rounded-full bg-gray-400" />
        <div className="w-3/5 border  border-gray-300 p-1">미쳤어</div>
      </div>
      <div className="fixed bottom-0 w-full ">
        <div className="mx-8 mb-4 flex items-center">
          <input
            type="text"
            className="w-full rounded-full focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
          />
          <div className="absolute right-0 mr-14">
            <span className="cursor-pointer rounded-xl bg-orange-500 p-1.5 text-white hover:ring-2 hover:ring-orange-500 hover:ring-offset-2">
              &rarr;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatDetail;
