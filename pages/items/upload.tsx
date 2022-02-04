import type { NextPage } from "next";

const Upload: NextPage = () => {
  return (
    <div className="mt-16 px-4">
      <div className="flex h-44 items-center justify-center border-2 border-dashed hover:border-orange-600">
        <label>
          <svg
            className="h-12 w-12"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <input type="file" className="file:hidden" />
        </label>
      </div>
      <div className="my-6">
        <label className="text-sm text-gray-900">Price</label>
        <div className="flex items-center ">
          <div className="absolute px-2 text-sm text-gray-600">
            <span>$</span>
          </div>
          <input
            type="text"
            placeholder="0.00"
            className="w-full rounded-md px-6 text-gray-500 hover:ring-2 hover:ring-orange-500 hover:ring-offset-2 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 "
          />
          <div className="absolute right-5 px-2 text-sm text-gray-600">
            <span>USD</span>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label className="text-sm text-gray-900">Description</label>
        <div>
          <textarea
            className="w-full rounded-md hover:ring-2 hover:ring-orange-500 hover:ring-offset-2 focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
            rows={4}
          />
        </div>
      </div>
      <button className="w-full rounded-md bg-orange-500 text-white hover:bg-orange-600 hover:ring-2 hover:ring-orange-500 hover:ring-offset-2">
        Upload product
      </button>
    </div>
  );
};

export default Upload;
