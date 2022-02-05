import type { NextPage } from "next";

const Community: NextPage = () => {
  return (
    <div className="px-4 pt-12">
      <div className="flex flex-col border-b-2">
        <span className=" mb-2 max-w-fit rounded-md bg-gray-100 px-2 text-sm font-medium">
          동네질문
        </span>
        <span className="mb-4 cursor-pointer text-sm hover:font-bold">
          <span className="text-orange-500">Q.</span> What is the best mandu
          restaurant?
        </span>
        <div className="mb-4 flex justify-between">
          <span className="text-sm text-gray-500">니꼬</span>
          <span className="text-sm text-gray-500">18시간 전</span>
        </div>
        <div className="flex space-x-5 border-t py-1">
          <span className="flex cursor-pointer items-center space-x-2 hover:font-bold">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>궁금해요 1</span>
          </span>
          <span className="flex cursor-pointer items-center space-x-2 hover:font-bold">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              ></path>
            </svg>
            <span>답변 1</span>
          </span>
        </div>
      </div>
      <button className="fixed bottom-0 right-0 mr-6 mb-14 rounded-full bg-orange-500 p-5 text-white hover:bg-orange-600">
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Community;
